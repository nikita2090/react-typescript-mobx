import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useToDoStore } from '../../store';

import { ItoDoPoint } from '../../store/toDoStore';

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
            <ul>
                {toDoStore.toDo.map(({ name, id, done }: ItoDoPoint) => {
                    let cn = '';
                    if (done) cn = 'done';

                    return (
                        <li key={id}>
                            <i
                                role="button"
                                tabIndex={id}
                                onClick={() => toDoStore.complete(id)}
                                onKeyDown={() => toDoStore.complete(id)}
                            >
                                +
                            </i>
                            <span className={cn}>{name}</span>
                            <button onClick={() => toDoStore.del(id)}>x</button>
                        </li>
                    );
                })}
            </ul>
            <div>Done:{toDoStore.finishedTasks}</div>
            <button onClick={() => toDoStore.cleanAll()}>Clean</button>
        </div>
    );
};

export default observer(ToDoList);
