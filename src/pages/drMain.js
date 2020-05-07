import React from 'react';
import { connect } from 'react-redux';

import { loggedInDeliveryRiderSelector } from '../redux/state/dr.state';

const connectToRedux = connect(state => ({
	rider: loggedInDeliveryRiderSelector(state),
}));

const DrMain = ({ rider }) => (
	<div>
		Welcome to Delivery Rider Management System, you are logged in as <span className="rider-name">{rider.name}</span>.
	</div>
);

export default connectToRedux(DrMain);
