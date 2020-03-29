import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
	<Layout>
		<div className="login-label">
			LOGIN
		</div>
		<div className="login">
			<div className="user">
				<span className="user-label">Phone Number</span>
				<input className="user-input" type="text" name="phone" placeholder="Enter phone number..." />
			</div>
			<Link href="/customer">
				<button className="login-button">LOGIN</button>
			</Link>
			<div className="register">
				<Link href="/register">
					<a className="register-link">Don't have an account with us yet?</a>
				</Link>
			</div>
		</div>
		<style jsx>{`
			.login {
				font-family: Arial, sans-serif;
				text-align: center;
				background-color: #000;
			}
			.login-label {
				font-family: Arial, sans-serif;
				background-color: #000;
				color: #fff;
				font-size: 12pt;
				padding: 8px;
			}
			.user {
				text-align: center;
				padding: 10px;
				height: 100%;
			}
			.user-label {
				font-size: 24pt;
				margin-right: 12px;
				color: #bbb;
			}
			.user-input {
				font-size: 48pt;
				padding: 10px;
				height: 55px;
				width: calc(80vw - 40px);
				background-color: #000;
				color: #fff;
				outline: none;
				box-shadow: none;
				border-radius: 4px;
				border-color: #fff;
			}
			.login-button{
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
			.register {
				text-align: center;
				padding: 8px;
			}
			.register-link {
				font-size: 16pt;
				color: #9999ff;
				text-decoration: none;
			}
		`}</style>
	</Layout>
);

export default Index;
