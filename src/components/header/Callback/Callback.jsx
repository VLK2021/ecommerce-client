import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";

import css from "./Callback.module.css";


const Callback = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className={css.wrap}>
            <button className={css.button} onClick={() => setOpen(true)}>
                <FaHeadset className={css.icon} />

                <span>Зворотний дзвінок</span>
            </button>

            {open && (
                <div className={css.backdrop} onClick={() => setOpen(false)}>
                    <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                        <h2>Зворотний дзвінок</h2>

                        <p>Тут буде форма для введення даних.</p>

                        <button className={css.close} onClick={() => setOpen(false)}>
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Callback };
