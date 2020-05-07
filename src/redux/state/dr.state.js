import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { path } from 'lodash/fp';

export const SET_LOGGED_IN_DELIVERY_RIDER = 'SET_LOGGED_IN_DELIVERY_RIDER';

export const loggedInDeliveryRiderSelector = path('dr.rider');

export const loginAsDeliveryRider = login => dispatch => {

};


