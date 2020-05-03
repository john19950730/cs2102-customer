import React from 'react';

const NewOrder = () => (
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
		<g strokeWidth="5" stroke="green">
			<line x1="15" y1="15" x2="35" y2="15" />
			<line x1="25" y1="5" x2="25" y2="25" />
		</g>
	</svg>
);

export default NewOrder;
