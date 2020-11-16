import { makeAutoObservable } from 'mobx';

export interface IUserNameStore {
    userName: string;
    loading: boolean;
    getUserName: () => Promise<void>;
    setUserName: (a: string) => void;
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
        this.loading = true;

        try {
            const res: Response = await fetch(
                'https://randomuser.me/api/?inc=name'
            );
            const json = (await res.json()) as IResponce;
            if (json.results) {
                this.setUserName(json.results[0].name.first);
            }
            this.loading = false;
        } catch (err) {
            alert(err);
        }
    }

    setUserName(name: string): void {
        this.userName = name;
    }
}

export const userNameStore = new UserNameStoreClass();
