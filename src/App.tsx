import React from 'react';
import ToDoList from './components/ToDoList';
import { Store, mainStore } from './store';
import FetchData from './components/FetchData';

const App: React.FC = () => (
    <Store.Provider value={mainStore}>
        <ToDoList />
        <FetchData />
    </Store.Provider>
);

export default App;
