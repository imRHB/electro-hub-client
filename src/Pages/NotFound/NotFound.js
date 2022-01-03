import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={`${styles.container}`}>
            <p className={`${'test-center my-5'} ${styles.testingTitle} ${styles.gallery1}`}>page not found</p>
        </div>
    );
};

export default NotFound;