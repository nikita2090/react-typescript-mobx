import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useToDoStore } from '../../store';

import { ItoDoPoint } from '../../store/toDoStore';

import styles from './styles.module.scss';

const ToDoList: React.FC = () => {
    const toDoStore = useToDoStore();

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputText(value);
    };

    const handleAddClick = () => {
        if (inputText === '') return;
        toDoStore.add(inputText);
        setInputText('');
    };

    return (
        <div>
            <h1>ToDoList</h1>
            <input value={inputText} onChange={handleInputChange} />
            <button onClick={handleAddClick}>ADD</button>
            <ul className={styles.list}>
                {toDoStore.toDo.map(({ name, id, done }: ItoDoPoint) => (
                    <li key={id}>
                        <button onClick={() => toDoStore.complete(id)}>
                            +
                        </button>
                        <span className={done ? styles.done : undefined}>
                            {name}
                        </span>
                        <button onClick={() => toDoStore.del(id)}>x</button>
                    </li>
                ))}
            </ul>
            <div>Done:{toDoStore.finishedTasks}</div>
            <button onClick={() => toDoStore.cleanAll()}>Clean</button>
        </div>
    );
};

export default observer(ToDoList);
