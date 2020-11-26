import React from 'react';
import { observer } from 'mobx-react';
import { useDidMount } from 'beautiful-react-hooks';
import { useErrorsStore, useUserNameStore } from '../../store';

import axios from 'axios';

const FetchData: React.FC = () => {
    const userNameStore = useUserNameStore();
    const errorsStore = useErrorsStore();

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
