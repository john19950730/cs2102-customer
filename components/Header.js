import Link from 'next/link';

const Header = () => (
	<div className="header">
		<Link href="/index">
			<a className="btn">Main</a>
		</Link>
		<Link href="/about">
			<a className="btn">About Page</a>
		</Link>
		<style jsx>{`
			.header {
				padding: 7px 0;
				height: 25px;
			}
			.header a {
				font-family: Arial, sans-serif;
				padding: 7px;
				margin-right: 7px;
				text-decoration: none;
				outline: none;
				border-radius: 3px;
				background: #ab90ef;
				color: #fff;
			}
		`}</style>
	</div>
);

export default Header;
