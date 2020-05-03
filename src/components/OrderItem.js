import React from 'react';
import { branch, renderNothing } from 'recompose';

const conditionalRender = branch(
	({ showAll, order }) => (!showAll && !!order.orderDelivered),
	renderNothing,	
);

const OrderItem = ({ order }) => (
	<tr className={order.orderDelivered && 'delivered'}>
		<td>{order.id}</td>
		<td>{order.address}</td>
		<td>{order.orderPlaced}</td>
		<td>{order.orderDelivered}</td>
	</tr>
);

export default conditionalRender(OrderItem);
