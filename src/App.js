import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './pages/login';
import Register from './pages/register';

import store from './redux/rootReducer';

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
