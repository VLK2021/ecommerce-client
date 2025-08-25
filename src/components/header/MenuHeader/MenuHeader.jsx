import React from 'react';

import css from './MenuHeader.module.css';
import {ThemeSwitcher} from "../../ThemeSwitcher/ThemeSwitcher.jsx";
import {ListMenuHeader} from "../ListMenuHeader/ListMenuHeader.jsx";
import {LoginLogout} from "../LoginLogout/LoginLogout.jsx";
import {Callback} from "../Callback/Callback.jsx";


const MenuHeader = () => {
    return (
        <div className={css.wrap}>
            <div className={css.menuBlock}>
                <ListMenuHeader/>
            </div>

            <div className={css.callbackBlock}>
                <Callback/>
            </div>

            <div className={css.switcherBlock}>
                <ThemeSwitcher/>
            </div>

            <div className={css.loginBlock}>
                <LoginLogout/>
            </div>
        </div>
    );
};

export {MenuHeader};