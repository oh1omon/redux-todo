import { useEffect } from 'react';
import { Input } from './Components/Input/Input';
import { List } from './Components/List/List';
import { useDispatch } from 'react-redux';
import { initializeTasks } from './store/reducers/reducer';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeTasks());
    }, [dispatch]);
    return (
        <div className="wrapper">
            <div className="app">
                <Input />
                <List />
            </div>
        </div>
    );
}

export default App;
