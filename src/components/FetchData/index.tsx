import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { useDidMount } from 'beautiful-react-hooks';
import { IMainStore, Store } from '../../store';
import { IUserNameStore } from '../../store/userNameStore';
import { IErrorsStore } from '../../store/errorsStore';

import axios from 'axios';

const FetchData: React.FC = () => {
    const store = useContext<IMainStore>(Store);
    const userNameStore: IUserNameStore = store.userNameStore;
    const errorsStore: IErrorsStore = store.errorsStore;

    useDidMount(() => {
        void userNameStore.getUserName();
    });

    const handleGetNameClick = () => {
        void userNameStore.getUserName();
    };

    const handleAddError = async () => {
        try {
            await axios('/api/400');
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            errorsStore.addError(err.response.data);
        }
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
            <hr />
            <div>Uncomment Mirage configuration in App before use</div>
            <button onClick={handleAddError}>addError</button>
        </div>
    );
};

export default observer(FetchData);
