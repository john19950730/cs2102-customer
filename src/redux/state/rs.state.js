import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

import { login, fetchRestaurant, addFoodItem } from '../api/rsApiCalls';
import { getRestaurantMenu } from '../api/apiCalls';

export const SET_LOGGED_IN_RESTAURANT_STAFF = 'SET_LOGGED_IN_RESTAURANT_STAFF';
export const SET_LOGGED_IN_RESTAURANT = 'SET_LOGGED_IN_RESTAURANT';
export const SET_LOGGED_IN_RESTAURANT_MENU = 'SET_LOGGED_IN_RESTAURANT_MENU';
export const LOGOUT_RESTAURANT_STAFF = 'LOGOUT_RESTAURANT_STAFF';

export const loggedInRestaurantStaffSelector = path('rs.staff');
export const restaurantSelector = path('rs.restaurant');
export const restaurantMenuSelector = path('rs.menu');

export const loginAsRestaurantStaff = userPass => dispatch => {
	login(userPass)
		.then(res => res.json())
		.then(({ isLoginSuccess, user }) => {
			if (!isLoginSuccess) {
				alert('Login unsuccessful.');
				return;
			}
			if (user) {
				dispatch(setLoggedInRestaurantStaff(user));
				dispatch(fetchRestaurantInformation(user));
				dispatch(fetchRestaurantMenu(user));
			}
		})
		.catch(() => alert('Error occurred when logging into Restaurant Staff System!'));
};

export const fetchRestaurantInformation = rid => dispatch => {
	fetchRestaurant(rid)
		.then(res => res.json())
		.then(({ restaurant }) => dispatch(setRestaurant(restaurant)))
		.catch(() => alert('Error occurred when connecting to server!'));
};

export const fetchRestaurantMenu = rid => dispatch => {
	getRestaurantMenu(rid)
		.then(res => res.json())
		.then(({ foodItems }) => dispatch(setRestaurantMenu(foodItems)))
		.catch(() => alert('Error occurred when connecting to server!'));
};

export const postNewMenuFoodItem = foodItem => (dispatch, getState) => {
	const state = getState();
	const { rid, username } = loggedInRestaurantStaffSelector(state);
	// no implementation of category on front end yet
	const foodItemWithCat = { ...foodItem, category: 1 };
	addFoodItem(foodItemWithCat, rid, username)
		.then(res => res.json())
		.then(console.log)
		.catch(() => alert('Error occurred when connecting to server!'));
};

export const setLoggedInRestaurantStaff = staff => ({ type: SET_LOGGED_IN_RESTAURANT_STAFF, payload: staff });
export const setRestaurant = restaurant => ({ type: SET_LOGGED_IN_RESTAURANT, payload: restaurant });
export const setRestaurantMenu = menu => ({ type: SET_LOGGED_IN_RESTAURANT_MENU, payload: menu });
export const logoutRestaurantStaff = () => ({ type: LOGOUT_RESTAURANT_STAFF });

const staff = handleAction(
	SET_LOGGED_IN_RESTAURANT_STAFF,
	(state, { payload }) => payload,
	{},
);

const restaurant = handleAction(
	SET_LOGGED_IN_RESTAURANT,
	(state, { payload }) => payload,
	{},
);

const menu = handleAction(
	SET_LOGGED_IN_RESTAURANT_MENU,
	(state, { payload }) => payload,
	[],
);

const staffReducer = (state, action) => {
	if (action.type === LOGOUT_RESTAURANT_STAFF) {
		state = undefined;
	}

	return combineReducers({
		staff,
		restaurant,
		menu,
	})(state, action);
};

export default staffReducer;
