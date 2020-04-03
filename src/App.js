import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';

const App = () => (
	<Router>
		<div className="App">
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default App;
