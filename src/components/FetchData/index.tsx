import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { useDidMount } from 'beautiful-react-hooks';
import { IMainStore, Store } from '../../store';
import { IUserNameStore } from '../../store/userNameStore';

const FetchData: React.FC = () => {
    const store = useContext<IMainStore>(Store);
    const userNameStore: IUserNameStore = store.userNameStore;

    useDidMount(() => {
        void userNameStore.getUserName();
    });

    const handleGetNameClick = () => {
        void userNameStore.getUserName();
    };

    return (
        <div>
            <h1>FetchData</h1>
            <div>
                {userNameStore.loading
                    ? 'loading...'
                    : `User name is ${userNameStore.userName}`}
            </div>
            <button onClick={handleGetNameClick}>getNewName</button>
        </div>
    );
};

export default observer(FetchData);
