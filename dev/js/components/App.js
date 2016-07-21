import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
require('../../scss/style.scss');

const App = () => (
	<div>
		<h2>Username list:</h2>
		<UserList />
		<hr/>
		<h2>User details:</h2>
		<UserDetails />
	</div>
);

export default App;