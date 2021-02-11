export const ADD_TASK = 'ADD_TASK';
export const DO_TASK = 'DO_TASK';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

export const setInitialState = (db) => ({ type: SET_INITIAL_STATE, db: db });
export const addTask = (task) => ({ type: ADD_TASK, task: task });
export const doTask = (id) => ({ type: DO_TASK, id: id });
