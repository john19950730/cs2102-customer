import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './svg/Logout';

import { setLoggedInCustomer, LOGOUT_CUSTOMER } from '../redux/state/customer.state';

const connectToRedux = connect(
	state => ({}),
	dispatch => ({
		logout: () => {
			dispatch(setLoggedInCustomer(LOGOUT_CUSTOMER));
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
