import { makeAutoObservable } from 'mobx';
import { errorsStore } from './errorsStore';
import axios, { AxiosResponse } from 'axios';

export interface IUserNameStore {
    userName: string;
    loading: boolean;
    getUserName: () => Promise<void>;
    setUserName: (a: string) => void;
    setLoading: (v: boolean) => void;
}

export interface IRes {
    name: {
        first: string;
        last: string;
        title: string;
    };
}

export interface IResponce {
    info?: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
    results: IRes[];
}

class UserNameStoreClass implements IUserNameStore {
    constructor() {
        makeAutoObservable(this);
    }

    userName = '';
    loading = false;

    async getUserName(): Promise<void> {
        this.setLoading(true);
        try {
            const res: AxiosResponse = await axios(
                'https://randomuser.me/api/?inc=name'
            );
            const data = res.data as IResponce;

            this.setUserName(data.results[0].name.first);
            this.setLoading(false);
        } catch (err) {
            console.log(err);
            errorsStore.addError(err);
        }
    }

    setUserName(name: string): void {
        this.userName = name;
    }

    setLoading(value: boolean): void {
        this.loading = value;
    }
}

export const userNameStore = new UserNameStoreClass();
