import { createAction } from 'redux-actions';
import { fetchJSONByPost } from '../../utils/ajax';
import { createAjaxAction } from '../../utils/utils';

export const isSuccess = createAction('success');
export const isFail = createAction('fail');

const fetchList = createAction('fetch list');
const requestList = createAction('request list');
const clearList = createAction('clear list');

export const fetchList = createAjaxAction(fetchJSONByPost('/list'), requestList, fetchList);