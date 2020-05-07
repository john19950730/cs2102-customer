import React from 'react';
import { branch, renderNothing } from 'recompose';

const conditionalRender = branch(
	({ showAll, order }) => (!showAll && !!order.orderDelivered),
	renderNothing,	
);

const OrderItem = ({ order }) => (
	<tr className={`order-row ${order.orderDelivered && 'delivered'}`}>
		<td>{order.oid}</td>
		<td>{order.address}</td>
		<td>{order.timeorderplaced}</td>
		<td>{order.timeriderdeliversorder}</td>
	</tr>
);

export default conditionalRender(OrderItem);
