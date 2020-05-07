import React from 'react';

const MenuItem = ({ foodItem }) => (
	<tr>
		<td>{foodItem.foodname}</td>
		<td>{foodItem.price}</td>
		<td>{foodItem.daily_limit}</td>
		<td>{foodItem.itemavailability}</td>
	</tr>
);

export default MenuItem;
