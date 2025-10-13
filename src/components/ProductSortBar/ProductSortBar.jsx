import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";

import css from "./ProductSortBar.module.css";



const ProductSortBar = ({ sortType, onSortChange, viewType, onViewChange }) => {
    const handleSort = (type) => {
        if (onSortChange) onSortChange(type);
    };


    return (
        <div className={css.wrap}>
            <div className={css.sortSection}>
                <span className={css.label}>Сортувати за:</span>

                <button
                    className={sortType === "name_asc" ? css.active : ""}
                    onClick={() => handleSort("name_asc")}
                >
                    Назва (А-Я)
                </button>

                <button
                    className={sortType === "name_desc" ? css.active : ""}
                    onClick={() => handleSort("name_desc")}
                >
                    Назва (Я-А)
                </button>

                <button
                    className={sortType === "price_asc" ? css.active : ""}
                    onClick={() => handleSort("price_asc")}
                >
                    Ціна ▲
                </button>

                <button
                    className={sortType === "price_desc" ? css.active : ""}
                    onClick={() => handleSort("price_desc")}
                >
                    Ціна ▼
                </button>
            </div>

            <div className={css.viewSection}>
                <span className={css.label}>Вид:</span>

                <div className={css.viewBtns}>
                    <button
                        onClick={() => onViewChange("grid")}
                        className={viewType === "grid" ? css.viewActive : ""}
                    >
                        <FaThLarge />
                    </button>

                    <button
                        onClick={() => onViewChange("list")}
                        className={viewType === "list" ? css.viewActive : ""}
                    >
                        <FaList />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ProductSortBar };
