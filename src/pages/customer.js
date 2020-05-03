import React from 'react';
import './css/customer.css';
import { Link } from 'react-router-dom';

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
				<tbody>
					<tr>
						<td>
							<Link to="/new">
								<button className="new-order-button">
									<NewOrder />
									<div>MAKE NEW ORDER</div>
								</button>
							</Link>
						</td>
						<td>
							<Link to="/orders">
								<button className="check-order-button">
									<CheckOrder />
									<div>CHECK CURRENT ORDER</div>
								</button>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</Layout>
);

export default Customer;
