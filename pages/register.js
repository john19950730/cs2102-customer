import Link from 'next/link';

import Layout from '../components/Layout';

const Register = () => (
	<Layout>
		<div className="register">
			<div className="register-label">
				REGISTER
			</div>
			<table>
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
			</table>
			<Link href="/">
				<button className="register-button">REGISTER</button>
			</Link>
		</div>
		<style jsx>{`
			.register {
				font-family: Arial, sans-serif;
				background: #000;
				text-align: center;
				padding-bottom: 16px;
			}
			.register-label {
				text-align: left;
				color: #fff;
				font-size: 12pt;
				padding: 8px;
			}
			.register table {
				padding: 10px;
				width: 80%;
			}
			.register table tr td {
				padding: 4px;
			}
			td.label {
				text-align: right;
			}
			td.label label {
				color: #bbb;
			}
			td.input input {
				font-size: 16px;
				width: 100%;
				padding: 4px;
				background-color: #000;
				color: #fff;
				outline: none;
				box-shadow: none;
				border-radius: 4px;
				border-color: #fff;
			}
			.register-button{
				font-size: 24px;
				width: 180px;
				height: 60px;
				background-color: #000;
				color: #ccc;
				outline: none;
				box-shadow: none;
				border-radius: 12px;
				border-color: #fff;
			}
		`}</style>
	</Layout>
);

export default Register;
