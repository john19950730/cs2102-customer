import React from 'react';
import { connect } from 'react-redux';
import { withProps } from 'recompose';

import Login from './login';
import Customer from './customer';

import { loggedInCustomerSelector } from '../redux/state/customer.state';

const connectToRedux = connect(state => ({
	customer: loggedInCustomerSelector(state),
}));

const Index = ({ customer }) => (
	<div>
		{//Object.keys(customer).length === 0 && <Login />}
		//Object.keys(customer).length > 0 && 
		<Customer />}
	</div>
);

export default connectToRedux(withProps(console.log)(Index));
