import React from 'react';
import './css/deliveryRider.css';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import DrLogin from './drLogin';
import DrMain from './drMain';

import { loggedInDeliveryRiderSelector } from '../redux/state/dr.state';

const connectToRedux = connect(state => ({
	rider: loggedInDeliveryRiderSelector(state),
}));

const DeliveryRider = ({ rider }) => (
	<div className="delivery-rider">
		{isEmpty(rider) && <DrLogin />}
		{!isEmpty(rider) && <DrMain />}
	</div>
);

export default connectToRedux(DeliveryRider);
