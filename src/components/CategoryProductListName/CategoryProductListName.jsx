import React from 'react';
import {useSelector} from "react-redux";

import css from './CategoryProductListName.module.css';


const CategoryProductListName = ({count, id}) => {
    const {categories} = useSelector(store => store.category);

    const currentCategory = categories.filter(category => category.id === id);


    return (
        <div className={css.wrap}>
            <h2 className={css.title}>
                {currentCategory[0]?.name}
            </h2>

            <span className={css.count}>
                {count} товарів
            </span>
        </div>
    );
};

export {CategoryProductListName};