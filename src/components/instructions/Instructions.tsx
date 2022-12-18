import React from 'react';
import styles from "./Instructions.module.scss";

const Instructions = () => {
    return (
        <aside className={styles['main-sidebar']}>
            Press the "add card" button to add the new Card.<br />
            Use the "sort cards" button to sort the Cards by the increase.<br />
            Press an X icon on the top right to delete them.<br />
        </aside>
    );
};

export default Instructions;
