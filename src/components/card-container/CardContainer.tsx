import React from 'react';
import styles from "./CardContainer.module.scss";
import Card from "./card/Card";
import {useCard} from "./card/useCard";

const CardContainer = () => {
    const { cardsData } = useCard();
    console.log(cardsData, "cardsData")

    return (
        <section className={styles['hero-card-container']}>
            <div className="container">
                <div className={styles['hero-card-container-main-panel']}>
                    {cardsData.map(({id}) => (
                        <Card key={id} id={id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardContainer;
