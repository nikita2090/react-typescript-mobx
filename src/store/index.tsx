import { createContext, useContext } from 'react';
import { IToDoStore, toDoStore } from './toDoStore';
import { IUserNameStore, userNameStore } from './userNameStore';
import { IErrorsStore, errorsStore } from './errorsStore';

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

export const useStore = (): IMainStore => useContext<IMainStore>(Store);

export const useToDoStore = (): IToDoStore => useStore().toDoStore;
export const useUserNameStore = (): IUserNameStore => useStore().userNameStore;
export const useErrorsStore = (): IErrorsStore => useStore().errorsStore;
