import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

export const SET_RESTAURANT_LIST = 'SET_RESTAURANT_LIST';
export const RESET_RESTAURANT_LIST = 'RESET_RESTAURANT_LIST';
export const SET_FOODITEMS_LIST = 'SET_FOODITEMS_LIST';
export const RESET_FOODITEMS_LIST = 'RESET_FOODITEMS_LIST';

export const SET_RESTAURANT = 'SET_RESTAURANT';
export const UNSET_RESTAURANT = 'UNSET_RESTAURANT';
export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
export const REMOVE_FOOD_ITEM = 'REMOVE_FOOD_ITEM';
export const RESET_NEW_ORDER = 'RESET_NEW_ORDER';

export const allRestaurantsSelector = path('order.restaurantList');
export const restaurantFoodItemsSelector = path('order.foodItemsList');
export const orderRestaurantSelector = path('order.restaurant');
export const orderFoodItemsSelector = path('order.foodItems');

export const setRestaurantList = restaurants => ({ type: SET_RESTAURANT_LIST, payload: restaurants });
export const resetRestaurantList = () => ({ type: RESET_RESTAURANT_LIST });
export const setFoodItemsList = foodItems => ({ type: SET_FOODITEMS_LIST, payload: foodItems });
export const resetFoodItemsList = () => ({ type: RESET_FOODITEMS_LIST });

export const setRestaurant = restaurant => ({ type: SET_RESTAURANT, payload: restaurant });
export const unsetRestaurant = () => ({ type: UNSET_RESTAURANT });
export const addFoodItem = (item, quant) => ({ type: ADD_FOOD_ITEM, payload: { item, quant } });
export const removeFoodItem = (item) => ({ type: REMOVE_FOOD_ITEM, payload: item });
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
	[],
);

const restaurant = handleActions(
	{
		[SET_RESTAURANT]: (state, { payload }) => payload,
		[UNSET_RESTAURANT]: state => undefined,
	},
	{},
);

const foodItems = handleActions(
	{
		[ADD_FOOD_ITEM]: (state, { payload }) => [...state, payload],
		[REMOVE_FOOD_ITEM]: (state, { payload }) => state.filter(({ item }) => item.foodItemId !== payload.item.foodItemId),
	},
	[],
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
