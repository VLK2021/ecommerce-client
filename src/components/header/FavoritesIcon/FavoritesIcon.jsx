import React from "react";
import { FaHeart } from "react-icons/fa";

import css from "./FavoritesIcon.module.css";


const FavoritesIcon = () => {
    const count = 5;


    return (
        <div className={css.wrap}>
            <FaHeart className={css.icon} />

            {count > 0 && <span className={css.currentLike}>{count}</span>}
        </div>
    );
};

export { FavoritesIcon };
