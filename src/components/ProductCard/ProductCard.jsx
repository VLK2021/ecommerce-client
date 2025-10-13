import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import css from "./ProductCard.module.css";


const ProductCard = ({ product, viewType }) => {
    const { name, price, images, stock } = product;
    const mainImage = images?.length > 0 ? images[0].url : "/no-image.jpg";


    return (
        <div className={`${css.card} ${viewType === "list" ? css.list : css.grid}`}>
            <div className={css.imgBlock}>
                <img src={mainImage} alt={name} />
            </div>

            <div className={css.infoBlock}>
                <h3 className={css.title}>{name}</h3>

                <div className={css.priceBlock}>
                    <span className={css.price}>{price} грн</span>
                </div>

                <div className={css.actions}>
                    <button className={css.buyBtn} disabled={stock === 0}>
                        <FaShoppingCart /> Купити
                    </button>
                    <FaHeart className={css.icon} />
                </div>
            </div>
        </div>
    );
};

export { ProductCard };

