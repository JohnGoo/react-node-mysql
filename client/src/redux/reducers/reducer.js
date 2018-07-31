import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isSuccess = handleActions({
	'success'(state, action) {
		return true;
	},
	'fail'(state, action) {
		return false;
	}
}, false);

const list = handleActions({
	'fetch list'(state, action) {
		const { req, res } = action.payload;
		return [...res];
	},
	'request list'(state, action) {
		const { req, res } = action.payload;
		return [...state];
	},
	'clear list'(state, action) {
		return [];
	}
}, []);


export default combineReducers({
	config: state => state ? 1 : 0,
	isSuccess,
	list
});