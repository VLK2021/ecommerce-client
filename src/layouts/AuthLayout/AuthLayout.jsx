import React from 'react';
import {Outlet} from "react-router-dom";

import css from './AuthLayout.module.css';


const AuthLayout = () => {

    return (
        <div className={css.wrap}>
            <Outlet/>
        </div>
    );
};

export {AuthLayout};