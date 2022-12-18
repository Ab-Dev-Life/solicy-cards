import React from 'react';
import styles from "../CardContainer.module.scss";
import {ICard} from "../../../types/cards";
import {useCard} from "./useCard";

const Card: React.FC<ICard> = ({ id}) => {
    const { handleRemove } = useCard(id);

    return (
        <div className={styles['card-overlay']}>
            <div className={styles.card}>
                <div>
                    <p>
                        {id}
                    </p>
                </div>
                <button type="button" className={styles['delete-card']} onClick={handleRemove}>X</button>
            </div>
        </div>
    );
};

export default Card;
