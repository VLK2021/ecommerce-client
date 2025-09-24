import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './CategoryProductsList.module.css';
import {productActions} from "../../store/slices/productSlice.jsx";



const CategoryProductsList = () => {
    const {id: categoryId} = useParams();
    const dispatch = useDispatch();

    const {products, total, trigger} = useSelector(store => store.products);
    const {page, limit} = useSelector(store => store.productsCategoryQuery);

    console.log(products, total, trigger);


    useEffect(() => {
        dispatch(productActions.getProductsByCategory({page, limit, categoryId}))
    }, [categoryId, dispatch, limit, page, trigger]);


    return (
        <div className={css.wrap}>
            {products.length > 0 ? (
                products.map(p => (
                    <div key={p.id}>
                        {p.name}
                    </div>
                ))
            ) : (
                <p>Товари не знайдено</p>
            )}
        </div>
    );
};

export {CategoryProductsList};