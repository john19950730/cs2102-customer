import React from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { branch, compose, renderComponent } from 'recompose';

import Layout from '../components/Layout';
import RedirectToHome from '../components/RedirectToHome';

import { loggedInCustomerSelector, registerNewUser } from '../redux/state/customer.state';

const connectToRedux = connect(
	state => ({
		customer: loggedInCustomerSelector(state),
		registerFormValues: getFormValues('register')(state),
	}),
	dispatch => ({
		registerHandler: values => () => {
			dispatch(registerNewUser(values));
		},
	}),
);

const loginCheck = branch(
	({ customer }) => (Object.keys(customer).length > 0),
	renderComponent(RedirectToHome),
);

const withReduxForm = reduxForm({
	form: 'register',
});

const Register = ({ registerFormValues, registerHandler }) => (
	<Layout>
		<div className="register">
			<div className="register-label">
				REGISTER
			</div>
			<table>
				<tbody>
					<tr className="phone">
						<td className="label">Username</td>
						<td className="input"><Field component="input" type="text" name="username" /></td>
					</tr>
					<tr className="name">
						<td className="label">Password</td>
						<td className="input"><Field component="input" type="password" name="password" /></td>
					</tr>
					<tr className="card">
						<td className="label">Credit Card No.</td>
						<td className="input"><Field component="input" type="text" name="registeredCreditCard" /></td>
					</tr>
				</tbody>
			</table>
			<Link to="/">
				<button className="register-button" onClick={registerHandler(registerFormValues)}>REGISTER</button>
			</Link>
		</div>
	</Layout>
);

const enhance = compose(connectToRedux, loginCheck, withReduxForm);

export default enhance(Register);
