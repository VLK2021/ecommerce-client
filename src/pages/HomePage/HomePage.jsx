import React from 'react';

import css from './HomePage.module.css';
import {Home} from "../../components/index.js";


const HomePage = () => {
    return (
        <div className={css.wrap}>
            <Home/>
        </div>
    );
};

export {HomePage};