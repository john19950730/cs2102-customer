import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import CustomerHeader from './CustomerHeader';

import { loggedInCustomerSelector } from '../redux/state/customer.state';

const connectToRedux = connect(state => ({
	customer: loggedInCustomerSelector(state),
}));

const Layout = ({ customer, children }) => (
	<div>
		{Object.keys(customer).length === 0 && <Header />}
		{Object.keys(customer).length > 0 && <CustomerHeader customer={customer} />}
		{children}
	</div>
);

export default connectToRedux(Layout);
