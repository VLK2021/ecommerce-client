import React from 'react';

import css from './InfoHeader.module.css';
import {CartIcon} from "../CartIcon/CartIcon.jsx";
import {FavoritesIcon} from "../FavoritesIcon/FavoritesIcon.jsx";
import {CatalogButton} from "../CatalogButton/CatalogButton.jsx";
import {SocialIcons} from "../SocialIcons/SocialIcons.jsx";


const InfoHeader = () => {


    return (
        <div className={css.wrap}>
            <div className={css.logoBlock}>
                VV-SHOP
            </div>

            <div className={css.catalogBlock}>
                <CatalogButton/>
            </div>

            <div className={css.searchBlock}>
                search
            </div>

            <div className={css.timeWorkBlock}>
                time work
            </div>

            <div className={css.iconsBlock}>
                <SocialIcons/>
            </div>

            <div className={css.cartLikeBlock}>
                <FavoritesIcon/>
                <CartIcon/>
            </div>
        </div>
    );
};

export {InfoHeader};