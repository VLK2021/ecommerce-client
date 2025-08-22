import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Header} from "../../components/header/index.js";
import {Footer} from "../../components/footer/index.js";


const MainLayout = () => {
    return (
        <div className={css.wrap}>
            <div className={css.headerBlock}>
                <Header/>
            </div>

            <div className={css.outletBlock}>
                <Outlet/>
            </div>

            <div className={css.footerBlock}>
                <Footer/>
            </div>
        </div>
    );
};

export {MainLayout};