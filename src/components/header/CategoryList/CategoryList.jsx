import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './CategoryList.module.css';
import {categoryActions} from "../../../store/slices/categorySlice.jsx";


const CategoryList = () => {
    const dispatch = useDispatch();
    const {categories, trigger} = useSelector(store => store.category);


    useEffect(() => {
        dispatch(categoryActions.getAllCategories());
    }, [dispatch, trigger]);


    return (
        <div className={css.wrap}>
            {categories.length > 0 &&
                categories.map((category) => (
                    <div key={category.id} className={css.categoryItem}>
                        <NavLink to={`/category/${category.id}`}>
                            {category.name}
                        </NavLink>
                    </div>
                ))}
        </div>
    );
};

export {CategoryList}