import React from 'react';
import ReactDOM from 'react-dom/client';

const Jumbo = () => (
	<div className="jumbotron">
		<h1>Your gateway to cinema</h1>
		<p>Rate, share, and review your favorite films.</p>
		<a href="/register">
			<button type="button" class="btn btn-primary">Sign up now</button>
		</a>
	</div>
);

export default Jumbo;