import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import customer from './state/customer.state';
import order from './state/order.state';

const rootReducer = combineReducers({
	form: formReducer,
	customer,
	order,
});

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
