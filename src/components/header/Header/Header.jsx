import React from 'react';

import css from './Header.module.css';
import {MenuHeader} from "../MenuHeader/MenuHeader.jsx";
import {InfoHeader} from "../InfoHeader/InfoHeader.jsx";


const Header = () => {

    return (
        <div className={css.wrap}>
            <div className={css.menuHeader}>
                <MenuHeader/>
            </div>

            <div className={css.infoHeader}>
                <InfoHeader/>
            </div>
        </div>
    );
};

export {Header};