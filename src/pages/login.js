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
		login: ({ username }) => dispatch(loginWithUsername({ username })),
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
				<form>
					<span className="user-label">Phone Number</span>
					<Field name="username" component="input" type="text" placeholder="Enter phone number..." />
					<div><button className="login-button" onClick={onSubmit}>LOGIN</button></div>
				</form>
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
