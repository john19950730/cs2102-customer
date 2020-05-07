import React from 'react';
import './css/profile.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, Field } from 'redux-form';
import { branch, withProps, compose, renderComponent } from 'recompose';

import withLoginCheck from '../components/hoc/withLoginCheck';
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
		saveProfile: (values) => () => {
			console.log(values);
		},
	}),
);

const withInitialValues = withProps(({ customer }) => {
	const { username, password, registeredcreditcard } = customer;
	return ({ initialValues:
		{
			username,
			registeredcreditcard,
		},
	});
});

const withReduxForm = reduxForm({
	form: 'profile',
});

const Profile = ({ customer, saveProfile, profileFormValues }) => (
	<Layout>
		<div className="profile">
			<div className="profile-reward">
				You have <span className="profile-rp">{customer.rewardpoints}</span> reward points.
			</div>
			<div className="profile-label">
				You can edit your personal information here:
			</div>
			<table className="profile-edit-form">
				<tbody>
					<tr>
						<td className="label">Username</td>
						<td className="input"><Field component="input" name="username" /></td>
					</tr>
					<tr>
						<td className="label">Password</td>
						<td className="input"><Field component="input" type="password" name="password" /></td>
					</tr>
					<tr>
						<td className="label">Credit Card No.</td>
						<td className="input"><Field component="input" name="registeredcreditcard" /></td>
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
	withLoginCheck(false),
	withInitialValues,
	withReduxForm,
);

export default enhance(Profile);
