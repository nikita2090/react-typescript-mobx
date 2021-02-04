import React from 'react';
import ToDoList from './components/ToDoList';
import { Store, mainStore } from './store';
import FetchData from './components/FetchData';
import { configure } from 'mobx';
import ErrorHandler from './components/ErrorHandler';
// import configureMirage from './api/configureMirage';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});

// configureMirage();

const App: React.FC = () => (
    <Store.Provider value={mainStore}>
        <ToDoList />
        <FetchData />
        <ErrorHandler />
    </Store.Provider>
);

export default App;
