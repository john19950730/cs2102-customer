import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose } from 'recompose';

import { loginAsDeliveryRider } from '../redux/state/dr.state';

const connectToRedux = connect(
	state => ({
		formValues: getFormValues('drLogin')(state),
	}),
	dispatch => ({
		drLogin: values => () => {
			dispatch(loginAsDeliveryRider(values));
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'drLogin',
})

const DrLogin = ({ formValues, drLogin }) => (
	<div>
		<div className="dr-header">
			Delivery Rider Login
		</div>
		<div className="dr-login">
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
			<button onClick={drLogin(formValues)}>Login</button>
		</div>
		<div className="dr-footer">
			Deliver Rider Management App by Group 41
		</div>
	</div>
);

const enhance = compose(
	connectToRedux,
	withReduxForm,
);

export default enhance(DrLogin);