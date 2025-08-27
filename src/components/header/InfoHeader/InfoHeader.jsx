import React from 'react';

import css from './InfoHeader.module.css';
import {CartIcon} from "../CartIcon/CartIcon.jsx";
import {FavoritesIcon} from "../FavoritesIcon/FavoritesIcon.jsx";


const InfoHeader = () => {
    return (
        <div className={css.wrap}>
            <div>
                VV-SHOP
            </div>

            <div>
                catalog
            </div>

            <div>
                search
            </div>

            <div>
                time work
            </div>

            <div>
                icons
            </div>

            <div className={css.cartLikeBlock}>
                <FavoritesIcon/>
                <CartIcon/>
            </div>
        </div>
    );
};

export {InfoHeader};