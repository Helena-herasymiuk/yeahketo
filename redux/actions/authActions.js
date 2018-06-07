import { createAction } from 'redux-actions';

export const SET_UNIQUE_SESSION_ID = 'AUTH/SET_UNIQUE_SESSION_ID';
export const setUniqueSessionId = createAction(SET_UNIQUE_SESSION_ID);

export const CREATE_NEW_SESSION = 'AUTH/CREATE_NEW_SESSION';
export const createNewSession = createAction(CREATE_NEW_SESSION);
