import * as actionTypes from '../actions/actions';
import axios from 'axios';

let initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_STATE: {
            return [...action.db];
        }
        case actionTypes.ADD_TASK: {
            let newTask = { id: state.length, task: action.task, done: false };
            axios
                .post('http://localhost:3001/tasks', newTask)
                .then((resp) => console.log(resp))
                .catch((err) => console.err(err));
            return [...state, newTask];
        }
        case actionTypes.DO_TASK: {
            let taskToDo = state.find((task) => task.id === action.id);
            taskToDo.done = !taskToDo.done;
            axios
                .put(`http://localhost:3001/tasks/${action.id}`, taskToDo)
                .then((resp) => console.log(resp))
                .catch((err) => console.err(err));
            state.splice(taskToDo.id, 1, taskToDo);
            return [...state];
        }
    }
    return state;
};
