import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doTask } from '../../actions';
export const List = () => {
    const dispatch = useDispatch();

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
