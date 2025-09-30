import React from 'react';
import {Outlet} from "react-router-dom";

import css from './PublicLayout.module.css';


const PublicLayout = () => {
    return (
        <div className={css.wrap}>
            <div className={css.asideBlock}>aside</div>

            <div className={css.outletBlock}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PublicLayout};