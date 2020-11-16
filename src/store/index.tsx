import { IToDoStore, toDoStore } from './toDoStore';
import { IUserNameStore, userNameStore } from './userNameStore';
import { createContext } from 'react';

export interface IMainStore {
    toDoStore: IToDoStore;
    userNameStore: IUserNameStore;
}

export const mainStore = {
    toDoStore,
    userNameStore,
};

export const Store = createContext(mainStore);
