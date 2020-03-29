import Link from 'next/link';

const Header = () => (
	<div className="header">
		<div className="main">
			<div className="welcome">Welcome to</div>
			<div className="name">041FDS</div>
		</div>
		<style jsx>{`
			.main {
				font-family: Arial, sans-serif;
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
		`}</style>
	</div>
);

export default Header;
