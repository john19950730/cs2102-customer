import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import Register from './pages/register';
import Orders from './pages/orders';

const App = () => (
	<Router>
		<div className="App">
			<Switch>
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
