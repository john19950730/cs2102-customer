import React from 'react';

const OrderItem = ({ orderItem }) => (
	<tr>
		<td>{orderItem.id}</td>
		<td>{orderItem.address}</td>
		<td>{orderItem.orderPlaced}</td>
		<td>{orderItem.orderDelivered}</td>
	</tr>
);

export default OrderItem;
