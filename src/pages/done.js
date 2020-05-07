import React from 'react';
import './css/done.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import { isEmpty } from 'lodash';

import Layout from '../components/Layout';
import BackToHome from '../components/BackToHome';
import RedirectToHome from '../components/RedirectToHome';

import {
	orderRestaurantSelector,
	orderCompleteSelector,
	resetNewOrder,
} from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		restaurant: orderRestaurantSelector(state),
		orderComplete: orderCompleteSelector(state),
	}),
	dispatch => ({
		resetOrder: () => {
			dispatch(resetNewOrder());
		},
	}),
);

const withRedirectToHome = branch(
	({ restaurant }) => Object.keys(restaurant).length === 0,
	renderComponent(RedirectToHome),
);

const Done = ({ orderComplete, resetOrder }) => (
	<Layout>
		<div className="done">
			{isEmpty(orderComplete) && (<div className="processing">Your order is being processed now...</div>)}
			{orderComplete.complete && (<div className="processed">
				Your order has been processed, you may check your order from customer home.
				<div className="bottom-bar">
					<BackToHome onClick={resetOrder} />
				</div>
			</div>)}
			{orderComplete.error && (<div className="processed">
				{orderComplete.msg}<br />
				Please amend your order.
				<div className="bottom-bar">
					<Link to="/newOrder"><button className="back-button">Back to Order</button></Link>
				</div>
			</div>)}
		</div>
	</Layout>
);

const enhance = compose(connectToRedux, withRedirectToHome);

export default enhance(Done);
