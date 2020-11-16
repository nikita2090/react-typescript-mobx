import { makeAutoObservable } from 'mobx';

export interface ItoDoPoint {
    name: string;
    id: number;
    done: boolean;
}

export interface IToDoStore {
    toDo: ItoDoPoint[];
    add: (a: string) => void;
    complete: (a: number) => void;
    del: (a: number) => void;
    cleanAll: () => void;
    finishedTasks: number;
}

class ToDoStoreClass implements IToDoStore {
    constructor() {
        makeAutoObservable(this);
    }

    toDo = [
        {
            name: 'first',
            id: 0,
            done: false,
        },
        {
            name: 'second',
            id: 1,
            done: false,
        },
        {
            name: 'third',
            id: 2,
            done: false,
        },
    ];

    add(point: string) {
        const nextId = this.toDo.length
            ? this.toDo[this.toDo.length - 1].id + 1
            : 0;
        this.toDo.push({
            name: point,
            id: nextId,
            done: false,
        });
    }

    complete(id: number) {
        this.toDo.map((point) => {
            if (point.id === id) {
                point.done = !point.done;
            }
            return point;
        });
    }

    del(poinId: number) {
        this.toDo = this.toDo.filter(({ id }) => id !== poinId);
    }

    cleanAll() {
        this.toDo = [];
    }

    get finishedTasks() {
        return this.toDo.filter((todo) => todo.done).length;
    }
}

export const toDoStore = new ToDoStoreClass();
