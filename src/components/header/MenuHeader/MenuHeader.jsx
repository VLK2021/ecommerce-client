import React from 'react';

import css from './MenuHeader.module.css';
import {ThemeSwitcher} from "../../ThemeSwitcher/ThemeSwitcher.jsx";
import {ListMenuHeader} from "../ListMenuHeader/ListMenuHeader.jsx";


const MenuHeader = () => {
    return (
        <div className={css.wrap}>
            <div className={css.menuBlock}>
                <ListMenuHeader/>
            </div>

            <div>callback</div>

            <div className={css.switcherBlock}>
                <ThemeSwitcher/>
            </div>

            <div>login</div>
        </div>
    );
};

export {MenuHeader};