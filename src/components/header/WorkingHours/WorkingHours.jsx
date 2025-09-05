import React from "react";
import {FaClock} from "react-icons/fa";

import css from "./WorkingHours.module.css";


const WorkingHours = () => {


    return (
        <div className={css.wrap}>
            <div className={css.iconBox}>
                <FaClock className={css.icon}/>
            </div>

            <div className={css.textBox}>
                <span className={css.title}>Графік роботи:</span>

                <span>Пн-Пт: 9:00 - 20:00</span>
                <span>Сб-Нд: 9:00 - 19:00</span>
            </div>
        </div>
    );
};

export {WorkingHours};
