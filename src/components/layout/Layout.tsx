import React from 'react';
import styles from './Layout.module.scss'
import Footer from "../footer/Footer";
import Instructions from "../instructions/Instructions";
import Header from "../header/Header";
import CardContainer from "../card-container/CardContainer";

const Layout = () => {
    return (
        <main className={styles.wrapper}>
            <Header />
            <CardContainer />
            <Footer />
            <Instructions />
        </main>
    );
};

export default Layout;
