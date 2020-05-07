import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Customer Facing Application
import Index from './pages/index';
import Register from './pages/register';
import Orders from './pages/orders';
import NewOrder from './pages/newOrder';
import Done from './pages/done';
import Profile from './pages/profile';

// Delivery Rider Facing Application
import DeliveryRider from './pages/deliveryRider';

// Restaurant Staff Facing Application
import RestaurantStaff from './pages/restaurantStaff';

const App = () => (
	<Router>
		<div className="App">
			<Switch>
				<Route path="/dr">
					<DeliveryRider />
				</Route>
				<Route path="/rs">
					<RestaurantStaff />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/done">
					<Done />
				</Route>
				<Route path="/newOrder">
					<NewOrder />
				</Route>
				<Route path="/orders">
					<Orders />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/">
					<Index />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default App;
