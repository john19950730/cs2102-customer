import { branch, renderComponent } from 'recompose';

import RedirectToHome from '../RedirectToHome';

const withLoginCheck = redirectWhenLoggedIn => (branch(
	({ customer }) => ((Object.keys(customer).length > 0) === redirectWhenLoggedIn),
	renderComponent(RedirectToHome),
));

export default withLoginCheck;
