import React from 'react';

import css from './LoginPage.module.css';
import {Login} from "../../components/Login/Login.jsx";


const LoginPage = () => {
    return (
        <div className={css.wrap}>
            <Login/>
        </div>
    );
};

export {LoginPage};