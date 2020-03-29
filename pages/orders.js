import Link from 'next/link';

import Layout from '../components/Layout';

const Orders = () => (
	<Layout>
		<div className="orders">
			<div className="orders-label">
				CURRENT ORDERS
			</div>
			<table className="orders-table">
				<thead>
					<tr>
						<td>Order ID</td>
						<td>Address</td>
						<td>Time Order Placed</td>
						<td>Time Order Delivered</td>
					</tr>
				</thead>
			</table>
		</div>
		<style jsx>{`
			.orders {
				font-family: Arial, sans-serif;
				background-color: #000;
			}
			.orders-label {
				color: #fff;
				font-size: 12pt;
				padding: 8px;
			}
			.orders-table {
				width: 100%;
			}
			.orders-table thead {
				font-weight: 500;
				text-align: center;
				color: #bbb;
			}
		`}</style>
	</Layout>
);

export default Orders;
