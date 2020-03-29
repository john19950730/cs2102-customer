import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
	<Layout>
		<div className="main">
			<div className="welcome">Welcome to</div>
			<div className="name">041FDS</div>
		</div>
		<div className="login">
			<div className="login-label">
				LOGIN
			</div>
			<div className="user">
				<span className="user-label">Phone Number</span>
				<input className="user-input" type="text" name="phone" placeholder="Enter phone number..." />
			</div>
			<div className="register">
				<Link href="/register">
					<a className="register-link">Don't have an account with us yet?</a>
				</Link>
			</div>
		</div>
		<style jsx>{`
			.main {
				font-family: Arial, sans-serif;
			}
			.login {
				font-family: Arial, sans-serif;
				background-color: #000;
			}
			.welcome {
				font-size: 24pt;
				padding: 20px;
				background-color: #123456;
				color: #efab78;
			}
			.name {
				font-size: 48pt;
				font-weight: 700;
				text-align: right;
				padding: 30px;
				background-color: #112233;
				color: #aaa;
			}
			.login-label {
				color: #fff;
				font-size: 12pt;
				padding: 4px;
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
				background-color: #000;
				color: #fff;
				height: 55px;
				padding: 10px;
				outline: none;
				box-shadow: none;
				border-radius: 4px;
				border-color: #fff;
				width: calc(80vw - 40px);
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
