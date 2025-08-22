import React from 'react';

import css from './MenuHeader.module.css';
import {ThemeSwitcher} from "../../ThemeSwitcher/ThemeSwitcher.jsx";


const MenuHeader = () => {
    return (
        <div className={css.wrap}>
            <div>catalog</div>
            <div>menu</div>
            <div>callback</div>

            <div className={css.switcherBlock}>
                <ThemeSwitcher/>
            </div>

            <div>login</div>
        </div>
    );
};

export {MenuHeader};