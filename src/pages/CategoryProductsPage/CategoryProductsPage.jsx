import React from 'react';

import css from './CategoryProductsPage.module.css';
import {CategoryProductsList} from "../../components/index.js";


const CategoryProductsPage = () => {
    return (
        <div className={css.wrap}>
            <CategoryProductsList />
        </div>
    );
};

export {CategoryProductsPage};