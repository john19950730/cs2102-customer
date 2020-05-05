import React from 'react';
import './css/orders.css';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import Layout from '../components/Layout';
import OrderItem from '../components/OrderItem';
import BackToHome from '../components/BackToHome';

import ShowAllOrders from '../components/svg/ShowAllOrders';
import HideCompletedOrders from '../components/svg/HideCompletedOrders';

import {
	customerOrdersSelector,
	showAllOrdersSelector,
	toggleShowAllOrders,
	fetchCustomerOrders,
} from '../redux/state/customer.state';

const connectToRedux = connect(
	state => ({
		orders: customerOrdersSelector(state),
		showAll: showAllOrdersSelector(state),
	}),
	dispatch => ({
		loadCustomerOrders: debounce(() => {
			dispatch(fetchCustomerOrders());
		}, 10000, { leading: true, trailing: false }),
		toggleShowAll: () => {
			dispatch(toggleShowAllOrders());
		},
	}),
);

const Orders = ({ orders, showAll, loadCustomerOrders, toggleShowAll }) => {

	loadCustomerOrders();

	return (<Layout>
		<div className="orders">
			<div className="orders-label">
				CURRENT ORDERS
			</div>
			<table className="orders-table">
				<thead>
					<tr>
						<td className="order-id">Order ID</td>
						<td className="order-address">Address</td>
						<td className="order-time-placed">Time Order Placed</td>
						<td className="order-time-delivered">Time Order Delivered</td>
					</tr>
				</thead>
				<tbody>
					{orders.map(order => (<OrderItem key={order.id} order={order} showAll={showAll} />))}
				</tbody>
			</table>
			<div className="toggle-show">
				{!showAll && <button className="show-all" onClick={toggleShowAll}>
					<span className="icon"><ShowAllOrders /></span>
					Show All Orders
				</button>}
				{!!showAll && <button className="hide-completed" onClick={toggleShowAll}>
					<span className="icon"><HideCompletedOrders /></span>
					Hide Completed Orders
				</button>}
			</div>
			<div className="bottom-bar">
				<BackToHome />
			</div>
		</div>
	</Layout>);
};

const enhance = connectToRedux;

export default enhance(Orders);
