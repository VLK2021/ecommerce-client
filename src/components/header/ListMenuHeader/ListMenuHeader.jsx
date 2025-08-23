import React from 'react';
import { NavLink } from "react-router-dom";

import css from './ListMenuHeader.module.css';
import headerNavMenu from "../../../helpers/headerNavMenu.jsx";


const ListMenuHeader = () => {


    return (
        <ul className={css.wrap}>
            {headerNavMenu && headerNavMenu.map(item => (
                <li key={item.label}>
                    <NavLink
                        to={item.to.toString()}
                        className={({ isActive }) =>
                            isActive ? `${css.link} ${css.active}` : css.link
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export { ListMenuHeader };
