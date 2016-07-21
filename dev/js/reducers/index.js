import { combineReducers } from 'redux';
import userReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
	users: userReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;