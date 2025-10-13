import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import css from "./CategoryProductsList.module.css";
import { productActions } from "../../store/slices/productSlice.jsx";
import { ProductCard } from "../ProductCard/ProductCard.jsx";
import { CategoryProductListName } from "../CategoryProductListName/CategoryProductListName.jsx";
import { ProductSortBar } from "../ProductSortBar/ProductSortBar.jsx";


const CategoryProductsList = () => {
    const { id: categoryId } = useParams();
    const dispatch = useDispatch();

    const [viewType, setViewType] = useState("grid");
    const [sortType, setSortType] = useState("new");

    const { products, trigger } = useSelector((store) => store.products);
    const { page, limit } = useSelector((store) => store.productsCategoryQuery);

    useEffect(() => {
        dispatch(productActions.getProductsByCategory({ page, limit, categoryId }));
    }, [categoryId, dispatch, limit, page, trigger]);


    return (
        <div className={css.wrap}>
            <div className={css.nameBlock}>
                <CategoryProductListName count={products.length} id={categoryId} />
            </div>

            <div className={css.sortBlock}>
                <ProductSortBar
                    sortType={sortType}
                    onSortChange={setSortType}
                    viewType={viewType}
                    onViewChange={setViewType}
                />
            </div>

            <div className={viewType === "grid" ? css.cardsGrid : css.cardsList}>
                {products.length > 0 ? (
                    products.map((obj) => (
                        <ProductCard key={obj.id} product={obj} viewType={viewType} />
                    ))
                ) : (
                    <p>Товари не знайдено</p>
                )}
            </div>
        </div>
    );
};

export { CategoryProductsList };
