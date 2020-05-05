import { handleAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { find, flow, path } from 'lodash/fp';

export const SET_RESTAURANT_LIST = 'SET_RESTAURANT_LIST';
export const RESET_RESTAURANT_LIST = 'RESET_RESTAURANT_LIST';
export const SET_FOODITEMS_LIST = 'SET_FOODITEMS_LIST';
export const RESET_FOODITEMS_LIST = 'RESET_FOODITEMS_LIST';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const SET_FOOD_ORDER = 'SET_FOOD_ORDER';
export const RESET_NEW_ORDER = 'RESET_NEW_ORDER';

export const allRestaurantsSelector = path('order.restaurantList');
export const restaurantFoodItemsSelector = path('order.foodItemsList');
export const foodItemSelectorById = id => flow(path('order.foodItemsList'), find(item => item.id === id));
export const orderRestaurantSelector = path('order.restaurant');
export const orderFoodItemsSelector = path('order.foodItems');

export const setRestaurantList = restaurants => ({ type: SET_RESTAURANT_LIST, payload: restaurants });
export const resetRestaurantList = () => ({ type: RESET_RESTAURANT_LIST });
export const setFoodItemsList = foodItems => ({ type: SET_FOODITEMS_LIST, payload: foodItems });
export const resetFoodItemsList = () => ({ type: RESET_FOODITEMS_LIST });

export const setRestaurant = restaurant => ({ type: SET_RESTAURANT, payload: restaurant });
export const setFoodOrder = order => ({ type: SET_FOOD_ORDER, payload: order });
export const resetFoodOrder = () => ({ type: SET_FOOD_ORDER, payload: {} });
export const resetNewOrder = () => ({ type: RESET_NEW_ORDER });

const restaurantList = handleActions(
	{
		[SET_RESTAURANT_LIST]: (state, { payload }) => payload,
		[RESET_RESTAURANT_LIST]: state => undefined,
	},
	//[],
	//test data
	[
		{id:'a1', name:'McDunkin'},
		{id:'a2', name:'Doughnalds'},
	],
);

const foodItemsList = handleActions(
	{
		[SET_FOODITEMS_LIST]: (state, { payload }) => payload,
		[RESET_FOODITEMS_LIST]: state => undefined,
	},
	//[],
	//test data
	[
		{id:'f1', name:'Dognuts', price:'19'},
		{id:'f2', name:'Cocala', price:'9'},
		{id:'f3', name:'Bananana', price:'12'},
	],
);

const restaurant = handleAction(
	SET_RESTAURANT,
	(state, { payload }) => payload,
	{},
);

const foodItems = handleAction(
	SET_FOOD_ORDER,
	(state, { payload }) => payload,
	{},
);

const orderReducer = (state, action) => {
	if (action.type === RESET_NEW_ORDER) {
		state = undefined;
	}

	return combineReducers({
		restaurantList,
		foodItemsList,
		restaurant,
		foodItems,
	})(state, action);
}

export default orderReducer;
