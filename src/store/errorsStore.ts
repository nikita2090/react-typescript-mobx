import { makeAutoObservable } from 'mobx';

interface IReqError {
    status: number;
    text: string;
    subStatus: string;
}

export interface IErrorsStore {
    errors: IReqError[];
    addError: (err: IReqError) => void;
    clean: () => void;
}

class errorsStoreClass {
    constructor() {
        makeAutoObservable(this);
    }

    errors: IReqError[] = [];

    addError(error: IReqError): void {
        this.errors.push(error);
    }

    clean(): void {
        this.errors = [];
    }
}

export const errorsStore = new errorsStoreClass();
