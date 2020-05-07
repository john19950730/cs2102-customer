import React from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { compose, withProps } from 'recompose';

import Layout from '../components/Layout';

import { loginWithUsername } from '../redux/state/customer.state';

const connectToRedux = connect(
	state => ({
		values: getFormValues('login')(state),
	}),
	dispatch => ({
		login: loginFormValues => dispatch(loginWithUsername(loginFormValues)),
	}),
);

const withHandleSubmit = withProps(({ values, login }) => ({
	onSubmit: e => {
		e.preventDefault();
		if (!values) {
			return;
		}
		login(values);
	},
}));

const withReduxForm = reduxForm({
	form: 'login',
});

const Login = ({ onSubmit }) => (
	<Layout>
		<div className="login-label">
			LOGIN
		</div>
		<div className="login">
			<div className="user">
				<table>
					<tbody>
						<tr>
							<td className="user-label">Username</td>
							<td className="user-input"><Field name="username" component="input" type="text" /></td>
						</tr>
						<tr>
							<td className="password-label">Password</td>
							<td className="password-input"><Field name="password" component="input" type="password" /></td>
						</tr>
					</tbody>
				</table>
				<div><button className="login-button" onClick={onSubmit}>LOGIN</button></div>
			</div>
			<div className="register">
				<Link to="/register">Do you not have a 041FDS account?</Link>
			</div>
		</div>
	</Layout>
);

const enhance = compose(
	connectToRedux,
	withHandleSubmit,
	withReduxForm,
);

export default enhance(Login);
