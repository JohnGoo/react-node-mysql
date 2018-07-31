import { createAction } from 'redux-actions';
import { fetchJSONByPost } from '../../utils/ajax';
import { createAjaxAction } from '../../utils/util';

export const isSuccess = createAction('success');
export const isFail = createAction('fail');

const fetchListEnd = createAction('fetch list');
const fetchListStart = createAction('request list');
const clearList = createAction('clear list');

export const fetchList = createAjaxAction(fetchJSONByPost('/list'), fetchListStart, fetchListEnd);