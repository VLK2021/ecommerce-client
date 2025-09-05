import React from 'react';

import css from './InfoHeader.module.css';
import {CartIcon} from "../CartIcon/CartIcon.jsx";
import {FavoritesIcon} from "../FavoritesIcon/FavoritesIcon.jsx";
import {CatalogButton} from "../CatalogButton/CatalogButton.jsx";
import {SocialIcons} from "../SocialIcons/SocialIcons.jsx";
import {WorkingHours} from "../WorkingHours/WorkingHours.jsx";
import {SearchBar} from "../SearchBar/SearchBar.jsx";


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
               <SearchBar/>
            </div>

            <div className={css.timeWorkBlock}>
                <WorkingHours />
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