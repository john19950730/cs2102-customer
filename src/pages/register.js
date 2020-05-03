import React from 'react';
import './css/register.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';

import Layout from '../components/Layout';
import RedirectToHome from '../components/RedirectToHome';

import { loggedInCustomerSelector } from '../redux/state/customer.state';

const connectToRedux = connect(state => ({
	customer: loggedInCustomerSelector(state),
}));

const loginCheck = branch(
	({ customer }) => (Object.keys(customer).length > 0),
	renderComponent(RedirectToHome),
);

const Register = () => (
	<Layout>
		<div className="register">
			<div className="register-label">
				REGISTER
			</div>
			<table>
				<tbody>
					<tr className="phone">
						<td className="label"><label className="phone-label">Phone Number</label></td>
						<td className="input"><input className="phone-input" type="text" name="phone" /></td>
					</tr>
					<tr className="name">
						<td className="label"><label className="name-label">Full Name</label></td>
						<td className="input"><input className="name-input" type="text" name="name" /></td>
					</tr>
					<tr className="card">
						<td className="label"><label className="card-label">Credit Card No.</label></td>
						<td className="input"><input className="card-input" type="text" name="name" /></td>
					</tr>
				</tbody>
			</table>
			<Link to="/">
				<button className="register-button">REGISTER</button>
			</Link>
		</div>
	</Layout>
);

const enhance = compose(connectToRedux, loginCheck);

export default enhance(Register);
