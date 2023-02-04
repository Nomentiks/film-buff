import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/Nav.css';

const Nav = () => (
	<nav className="navbar">
		<a href="/"><h3>FilmClub</h3></a>
		<a href="/login">
			<button type="button" class="btn btn-primary">Sign In</button>
		</a>
	</nav>
);

export default Nav;