import Link from 'next/link';

import Layout from '../components/Layout';
import NewOrder from '../components/svg/NewOrder';
import CheckOrder from '../components/svg/CheckOrder';

const Customer = () => (
	<Layout>
		<div className="customer">
			<div className="customer-label">
				Dear <span className="customer-name">ASDFGHJKL</span>, would you like to:
			</div>
			<table>
				<tr>
					<td><button className="new-order-button"><NewOrder /><div>MAKE NEW ORDER</div></button></td>
					<td>
						<Link href="/orders">
							<button className="check-order-button"><CheckOrder /><div>CHECK CURRENT ORDER</div></button>
						</Link>
					</td>
				</tr>
			</table>
		</div>
		<style jsx>{`
			.customer {
				font-family: Arial, sans-serif;
				background-color: #000;
			}
			.customer-label {
				color: #fff;
				font-size: 12pt;
				padding: 8px;
			}
			.customer-name {
				font-weight: 700;
				color: #e9c117;
			}
			.customer table {
				width: 100%;
				padding: 20px;
			}
			.customer table tr td {
				width: 50%;
				padding: 20px;
			}
			.customer table tr td button {
				width: 100%;
				height: 250px;
				padding: 12px;
				font-size: 24pt;
				background-color: #000;
				color: #ddd;
				outline: none;
				box-shadow: none;
				border-radius: 12px;
				border-color: #fff;
			}
		`}</style>
	</Layout>
);

export default Customer;
