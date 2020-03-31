import App from 'next/app';
import { Provider } from 'react-redux';

import store from '../redux/rootReducer';

const MyApp = ({ Component, pageProps }) => (
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>
);

export default MyApp;