import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/reducers/reducer';

export const Input = () => {
    const [newTask, setNewTask] = useState('');

    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setNewTask(e.target.value);
    };

    const clickHandler = (e) => {
        e.preventDefault();
        if (newTask.length > 0) dispatch(createTask(newTask));
    };
    return (
        <form>
            <label htmlFor="input">
                Your task(should contain at least one symbol)
                <input
                    onChange={(e) => changeHandler(e)}
                    type="text"
                    id="input"
                />
            </label>
            <button onClick={(e) => clickHandler(e)}>Add</button>
        </form>
    );
};
