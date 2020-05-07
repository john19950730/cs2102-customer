import React from 'react';
import './css/deliveryRider.css';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { compose } from 'recompose';

const connectToRedux = connect(
	state => ({
		formValues: getFormValues('drLogin')(state),
	}),
	dispatch => ({
		drLogin: values => () => {
			// handle dr login
			console.log(values);
		},
	}),
);

const withReduxForm = reduxForm({
	form: 'drLogin',
})

const DeliveryRider = ({ formValues, drLogin }) => (
	<div className="delivery-rider">
		<div className="dr-header">
			Delivery Rider Login
		</div>
		<div className="dr-login">
			<table>
				<tbody>
					<tr>
						<td className="label">Phone Number:</td>
						<td><Field component="input" name="drUser" type="text" /></td>
					</tr>
					<tr>
						<td className="label">Password:</td>
						<td><Field component="input" name="drPass" type="password" /></td>
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

export default enhance(DeliveryRider);
