import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/Nav.css';
import Nav from './Nav.js';
import Jumbo from './Jumbo.js';

const Home = () => (
	<div>
		<Nav />
		<Jumbo />
	</div>
);

export default Home;