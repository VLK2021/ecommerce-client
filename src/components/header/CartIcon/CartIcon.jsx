import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import css from "./CartIcon.module.css";


const CartIcon = () => {
    const count = 2;


    return (
        <NavLink
            to="/cart"
            className={css.iconBox}
            aria-label="Перейти до кошика"
        >
            <FaShoppingCart className={css.icon} />

            {count > 0 && <span className={css.badge}>{count}</span>}
        </NavLink>
    );
};

export { CartIcon };
