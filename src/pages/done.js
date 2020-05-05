import React from 'react';
import './css/done.css';
import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';

import Layout from '../components/Layout';
import BackToHome from '../components/BackToHome';
import RedirectToHome from '../components/RedirectToHome';

import {
	orderRestaurantSelector,
	isOrderCompleteSelector,
	resetNewOrder,
} from '../redux/state/order.state';

const connectToRedux = connect(
	state => ({
		restaurant: orderRestaurantSelector(state),
		isOrderComplete: isOrderCompleteSelector(state),
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

const Done = ({ isOrderComplete, resetOrder }) => (
	<Layout>
		<div className="done">
			{!isOrderComplete && (<div className="processing">Your order is being processed now...</div>)}
			{isOrderComplete && (<div className="processed">
				Your order has been processed, you may check your order from customer home.
				<div className="bottom-bar">
					<BackToHome onClick={resetOrder} />
				</div>
			</div>)}
		</div>
	</Layout>
);

const enhance = compose(connectToRedux, withRedirectToHome);

export default enhance(Done);
