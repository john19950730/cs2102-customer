import React from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

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
			<Link to="/login">
				<button className="register-button">REGISTER</button>
			</Link>
		</div>
	</Layout>
);

export default Register;
