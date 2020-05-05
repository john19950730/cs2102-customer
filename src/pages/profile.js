import React from 'react';
import './css/profile.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { branch, withProps, compose, renderComponent } from 'recompose';

import Layout from '../components/Layout';
import RedirectToHome from '../components/RedirectToHome';
import BackToHome from '../components/BackToHome';

import { loggedInCustomerSelector } from '../redux/state/customer.state';

const connectToRedux = connect(
	state => ({
		customer: loggedInCustomerSelector(state), 
		profileFormValues: getFormValues('profile')(state),
	}),
	dispatch => ({
		saveProfile: (values) => {
			// some save profile handler
		},
	}),
);

const loginCheck = branch(
	({ customer }) => (Object.keys(customer).length === 0),
	renderComponent(RedirectToHome),
);

const withInitialValues = withProps(({ customer }) => {
	const { name, cc, phone } = customer;
	return ({ initialValues:
		{
			name,
			cc,
			phone,
		},
	});
});

const withReduxForm = reduxForm({
	form: 'profile',
});

const Profile = ({ saveProfile, profileFormValues }) => (
	<Layout>
		<div className="profile">
			<div className="profile-label">
				You can edit your personal information here:
			</div>
			<table className="profile-edit-form">
				<tbody>
					<tr>
						<td class="label">Phone Number</td>
						<td class="input">
							<Field component="input" name="phone" />
						</td>
					</tr>
					<tr>
						<td class="label">Full Name</td>
						<td class="input">
							<Field component="input" name="name" />
						</td>
					</tr>
					<tr>
						<td class="label">Credit Card No.</td>
						<td class="input">
							<Field component="input" name="cc" />
						</td>
					</tr>
				</tbody>
			</table>
			<div className="bottom-bar">
				<BackToHome />
				<Link to="/">
					<button className="save-profile" onClick={saveProfile(profileFormValues)}>Save Profile</button>
				</Link>
			</div>
		</div>
	</Layout>
);

const enhance = compose(
	connectToRedux,
	loginCheck,
	withInitialValues,
	withReduxForm,
);

export default enhance(Profile);
