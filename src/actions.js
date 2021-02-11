export const ADD_TASK = 'ADD_TASK';
export const DO_TASK = 'DO_TASK';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

export const doTask = (id) => ({ type: DO_TASK, id: id });
