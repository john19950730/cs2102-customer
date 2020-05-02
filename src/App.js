import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import Register from './pages/register';

const App = () => (
	<Router>
		<div className="App">
			<Switch>
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
