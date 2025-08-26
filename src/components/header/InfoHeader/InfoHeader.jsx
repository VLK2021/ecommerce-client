import React from 'react';

import css from './InfoHeader.module.css';


const InfoHeader = () => {
    return (
        <div className={css.wrap}>
            <div>
                VV-SHOP
            </div>

            <div>
                search
            </div>

            <div>
                time work
            </div>

            <div>
                icons
            </div>

            <div>
                like and card
            </div>
        </div>
    );
};

export {InfoHeader};