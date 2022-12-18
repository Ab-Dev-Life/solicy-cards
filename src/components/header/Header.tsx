import React from 'react';
import styles from "./Header.module.scss";
import {useHeader} from "./useHeader";

const Header = () => {
    const { cardsData, handleSort, handleAdd } = useHeader();

    return (
            <header className={styles['app-header']}>
                <div className="container">
                    <div className={styles['user-actions']} >
                        <button onClick={handleAdd}>add card</button>
                        <button disabled={!(cardsData.length > 1)} onClick={handleSort}>sort cards</button>
                    </div>
                </div>
            </header>
    );
};

export default Header;
