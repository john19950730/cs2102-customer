import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './svg/Logout';

import { logoutCustomer } from '../redux/state/customer.state';
import { resetNewOrder } from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({}),
	dispatch => ({
		logout: () => {
			dispatch(logoutCustomer());
			dispatch(resetNewOrder());
		},
	}),
);

const CustomerHeader = ({ customer, logout }) => (
	<div className="customer-header">
		<div className="customer-label">
			Welcome back to 041FDS,
			<Link to="/profile">
				<div className="customer-name">{customer.name}</div>
			</Link>
		</div>
		<div className="logout">
			<Link to="/">
				<button className="logout-button" onClick={logout}>
					<Logout />
					LOGOUT
				</button>
			</Link>
		</div>
	</div>
);

export default connectToRedux(CustomerHeader);
