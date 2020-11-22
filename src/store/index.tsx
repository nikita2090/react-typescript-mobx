import { IToDoStore, toDoStore } from './toDoStore';
import { IUserNameStore, userNameStore } from './userNameStore';
import { IErrorsStore, errorsStore } from './errorsStore';
import { createContext } from 'react';

export interface IMainStore {
    toDoStore: IToDoStore;
    userNameStore: IUserNameStore;
    errorsStore: IErrorsStore;
}

export const mainStore = {
    toDoStore,
    userNameStore,
    errorsStore,
};

export const Store = createContext(mainStore);
