import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doTask, setInitialState } from '../../actions/actions';
import axios from 'axios';

export const List = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('http://localhost:3001/tasks')
            .then((data) => dispatch(setInitialState(data.data)));
    }, []);

    const tasks = useSelector((state) => state);

    const clickHandler = (e, id) => {
        e.preventDefault();
        dispatch(doTask(id));
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li
                        onClick={(e) => clickHandler(e, task.id)}
                        key={task.id}
                        className={task.done ? 'done' : ''}
                    >
                        {task.task}
                    </li>
                ))}
            </ul>
        </div>
    );
};
