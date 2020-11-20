import React from 'react';
import ToDoList from './components/ToDoList';
import { Store, mainStore } from './store';
import FetchData from './components/FetchData';
import { configure } from 'mobx';

configure({ enforceActions: 'always' });

const App: React.FC = () => (
    <Store.Provider value={mainStore}>
        <ToDoList />
        <FetchData />
    </Store.Provider>
);

export default App;
