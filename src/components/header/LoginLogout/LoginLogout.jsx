import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import css from "./LoginLogout.module.css";

const LoginLogout = () => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    const toggle = () => setOpen(v => !v);

    // Закривати по кліку назовні
    useEffect(() => {
        const onDocClick = (e) => {
            if (!wrapRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);


    return (
        <div className={css.wrap} ref={wrapRef}>
            <button type="button" className={css.button} onClick={toggle}>
                <FaUser className={css.icon} />

                <span>Ваш кабінет</span>
            </button>

            <div className={`${css.menu} ${open ? css.open : ""}`} role="menu">
                <NavLink to="/login" className={css.item} role="menuitem">
                    Вхід
                </NavLink>

                <NavLink to="/register" className={css.item} role="menuitem">
                    Реєстрація
                </NavLink>
            </div>
        </div>
    );
};

export { LoginLogout };
