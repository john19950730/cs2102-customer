import React from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { compose, withProps } from 'recompose';

import Layout from '../components/Layout';

import { login } from '../redux/api/apiCalls';

const connectToRedux = connect(state => ({
	values: getFormValues('login')(state),
}));

const withHandleSubmit = withProps(({ values }) => ({
	onSubmit: e => {
		e.preventDefault();
		if (!values) {
			return;
		}
		login(values)
			.then(console.log)
			.catch(() => alert('Login has failed!'));
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
