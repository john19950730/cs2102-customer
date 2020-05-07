import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose } from 'recompose';

import { loginAsRestaurantStaff } from '../redux/state/rs.state';

const connectToRedux = connect(
	state => ({
		formValues: getFormValues('rsLogin')(state),
	}),
	dispatch => ({
		rsLogin: values => () => {
			dispatch(loginAsRestaurantStaff(values));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'rsLogin',
})

const RsLogin = ({ formValues, rsLogin }) => (
	<div className="rs-login">
		<div className="rs-header">
			Restaurant Staff Login
		</div>
		<div className="rs-login-form">
			<table>
				<tbody>
					<tr>
						<td className="label">Username:</td>
						<td><Field component="input" name="username" type="text" /></td>
					</tr>
					<tr>
						<td className="label">Password:</td>
						<td><Field component="input" name="password" type="password" /></td>
					</tr>
				</tbody>
			</table>
			<button onClick={rsLogin(formValues)}>Login</button>
		</div>
		<div className="rs-footer">
			Menu Management App for Restaurant Staff by Group 41
		</div>
	</div>
);

const enhance = compose(
	connectToRedux,
	withReduxForm,
);

export default enhance(RsLogin);