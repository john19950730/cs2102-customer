import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
	<Layout>
		<div className="main">
			<div className="welcome">Welcome to</div>
			<div className="name">041FDS</div>
		</div>
		<style jsx>{`
			.welcome {
				font-family: Arial, sans-serif;
				font-size: 48px;
				padding: 20px;
				background-color: #3456cd;
				color: #efab78;
			}
			.name {
				font-family: Arial, sans-serif;
				font-size: 128px;
				text-align: right;
				padding: 50px;
				background-color: #34ef78;
				color: #000;
			}
		`}</style>
	</Layout>
);

export default Index;
