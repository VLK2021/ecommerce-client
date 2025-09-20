import React from 'react';

import css from './PublicLayout.module.css';
import {Outlet} from "react-router-dom";


const PublicLayout = () => {
    return (
        <div className={css.wrap}>
            <div className={css.outletBlock}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PublicLayout};