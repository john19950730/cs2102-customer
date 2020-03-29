import { Provider } from 'react-redux';

import Header from './Header';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
