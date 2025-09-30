import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './CategoryProductsList.module.css';
import {productActions} from "../../store/slices/productSlice.jsx";
import {ProductCard} from "../ProductCard/ProductCard.jsx";


const CategoryProductsList = () => {
    const {id: categoryId} = useParams();
    const dispatch = useDispatch();

    const {products, total, trigger} = useSelector(store => store.products);
    const {page, limit} = useSelector(store => store.productsCategoryQuery);

    console.log(products, total, trigger);


    useEffect(() => {
        dispatch(productActions.getProductsByCategory({page, limit, categoryId}));
    }, [categoryId, dispatch, limit, page, trigger]);


    return (
        <div className={css.wrap}>
            <div>menu sort</div>

            <div>
                {products.length > 0 ? (
                products.map(obj => <ProductCard
                    key={obj.id}
                    product={obj}
                />)
            ) : (
                <p>Товари не знайдено</p>
            )}
            </div>
        </div>
    );
};

export {CategoryProductsList};