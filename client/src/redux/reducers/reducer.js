import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isSuccess = handleActions({
  success() {
    return true;
  },
  fail() {
    return false;
  },
}, false);

const list = handleActions({
  'fetch list': function (state, action) {
    const { res } = action.payload;
    return [...res];
  },
  'request list': function (state) {
    // const { req, res } = action.payload;
    return [...state];
  },
  'clear list': function () {
    return [];
  },
}, []);


export default combineReducers({
  config: state => (state ? 1 : 0),
  isSuccess,
  list,
});
