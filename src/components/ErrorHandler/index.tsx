import React from 'react';
import { observer } from 'mobx-react';
import { useErrorsStore } from '../../store';

import styles from './styles.module.scss';
import { autorun } from 'mobx';

const ErrorHandler: React.FC = () => {
    const errorsStore = useErrorsStore();

    autorun(() => {
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
