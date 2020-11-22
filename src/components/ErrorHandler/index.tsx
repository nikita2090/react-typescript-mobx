import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { IMainStore, Store } from '../../store';
import { IErrorsStore } from '../../store/errorsStore';

import styles from './styles.module.scss';

const ErrorHandler: React.FC = () => {
    const store = useContext<IMainStore>(Store);
    const errorsStore: IErrorsStore = store.errorsStore;

    useEffect(() => {
        if (errorsStore.errors.length) {
            setTimeout(() => {
                errorsStore.clean();
            }, 3000);
        }
    });

    return errorsStore.errors.length ? (
        <div className={styles.err}>{errorsStore.errors[0].text}</div>
    ) : null;
};

export default observer(ErrorHandler);
