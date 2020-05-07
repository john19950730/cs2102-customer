import React from 'react';
import './css/restaurantStaff.css';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

import RsLogin from './rsLogin';
import RsMain from './rsMain';

import { loggedInRestaurantStaffSelector, restaurantSelector } from '../redux/state/rs.state';

const connectToRedux = connect(state => ({
	restaurant: restaurantSelector(state),
	rstaff: loggedInRestaurantStaffSelector(state),
}));

const withLoggedIn = withProps(({ restaurant, rstaff }) => ({
	loggedIn: ((Object.keys(restaurant).length + Object.keys(rstaff).length) !== 0),
}));

const RestaurantStaff = ({ loggedIn }) => (
	<div className="restaurant-staff">
		{!loggedIn && <RsLogin />}
		{loggedIn && <RsMain />}
	</div>
);

const enhance = compose(
	connectToRedux,
	withLoggedIn,
);

export default enhance(RestaurantStaff);
