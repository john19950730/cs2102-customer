import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import customer from './state/customer.state';
import order from './state/order.state';
import restaurantFood from './state/restaurantFood.state';
import dr from './state/dr.state';
import rs from './state/rs.state';

const rootReducer = combineReducers({
	form: formReducer,
	customer,
	order,
	restaurantFood,
	dr,
	rs,
});

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
