import React from 'react';

const CheckOrder = () => (
	<svg width="65" height="75">
		<g strokeWidth="3" fill="#000" stroke="white">
			<line x1="17" y1="30" x2="17" y2="5" />
			<line x1="17" y1="7" x2="47" y2="7" />
			<line x1="46" y1="6" x2="57" y2="17" />
			<line x1="47" y1="16" x2="57" y2="16" />
			<line x1="47" y1="7" x2="47" y2="17" />
			<line x1="57" y1="16" x2="57" y2="58" />
			<line x1="57" y1="56" x2="47" y2="56" />
			<line x1="25" y1="25" x2="50" y2="25" />
			<line x1="25" y1="35" x2="50" y2="35" />
			<line x1="25" y1="45" x2="50" y2="45" />
		</g>
		<g strokeWidth="3" fill="#ddd" stroke="black">
			<path d="M5 38 L25 28 L45 38 L25 48Z" />
			<path d="M5 38 L5 62 L25 72 L25 48Z" />
			<path d="M45 38 L45 62 L25 72 L25 48Z" />
		</g>
		<g strokeWidth="5" fill="transparent" stroke="blue">
			<polyline points="10,20 10,16 16,10 24,10 30,16 30,24 24,30 20,34 20,36" />
			<line x1="20" y1="40" x2="20" y2="44" />
		</g>
	</svg>
);

export default CheckOrder;
