import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";

import css from "./CatalogButton.module.css";


const CatalogButton = () => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    const toggle = () => setOpen(v => !v);

    // Закривати по кліку поза обгорткою
    useEffect(() => {
        const onDocMouseDown = (e) => {
            if (!wrapRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, []);


    return (
        <div className={css.wrap} ref={wrapRef}>
            <button
                type="button"
                className={css.btn}
                onClick={toggle}
                aria-haspopup="menu"
                aria-expanded={open}
            >
                <FaBars className={css.iconLeft} />

                <span className={css.label}>Каталог</span>

                <FaChevronDown className={css.iconRight} />
            </button>

            {/* Меню (поки заглушка) */}
            <div className={`${css.menu} ${open ? css.open : ""}`}
                 role="menu"
                 onClick={(e)=>e.stopPropagation()}
            >
                dsfsdfs
            </div>
        </div>
    );
};

export { CatalogButton };
