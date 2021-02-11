import * as actionTypes from '../../actions';
import axios from 'axios';
import { getAll, createNew } from '../../services/listing';

let initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_STATE: {
            return action.data;
        }
        case actionTypes.ADD_TASK: {
            return [...state, action.data];
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

export const initializeTasks = () => {
    return async (dispatch) => {
        const listings = await getAll();
        dispatch({
            type: actionTypes.SET_INITIAL_STATE,
            data: listings,
        });
    };
};

export const createTask = (content) => {
    return async (dispatch) => {
        const newTask = await createNew(content);
        dispatch({
            type: actionTypes.ADD_TASK,
            data: newTask,
        });
    };
};
