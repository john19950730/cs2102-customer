import React from 'react';
import './css/backbutton.css';
import { Link } from 'react-router-dom';

import Home from './svg/Home';

const BackToHome = () => (
	<Link to="/">
		<button className="back-button">
			<span className="icon"><Home /></span>
			Back to Home
		</button>
	</Link>
);

export default BackToHome;
