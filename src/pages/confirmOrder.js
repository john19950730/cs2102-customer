import React from 'react';
import './css/confirmOrder.css';

const ConfirmOrder = ({ hidden }) => (
	<div className={`confirm ${hidden && 'hidden'}`}>
		<div className="confirm-label">
			<span className="step-number">3</span>CONFIRM ORDER
		</div>
		<div className="confirm-intro">
			Please confirm your order below:
		</div>
		<table className="confirm-table">
			<thead>
				<tr>
					<td>Name</td>
					<td>Price</td>
					<td>Quantity</td>
				</tr>
			</thead>
			<tbody>
			</tbody>
			<tfoot>
			</tfoot>
		</table>
		<div className="bottom-bar">
			<button className="amend-order">Back to Food Items</button>
			<button className="confirm-order">Confirm Order</button>
		</div>
	</div>
);

export default ConfirmOrder;
