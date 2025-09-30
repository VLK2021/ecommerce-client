import React from 'react';

const ProductCard = ({product}) => {
    const {id, name} = product;


    return (
        <div>
            {name}
        </div>
    );
};

export {ProductCard};