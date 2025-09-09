import React from 'react';

import css from './RegistrationPage.module.css';
import {Registration} from "../../components/index.js";


const RegistrationPage = () => {


    return (
        <div className={css.wrap}>
            <Registration/>
        </div>
    );
};

export {RegistrationPage};