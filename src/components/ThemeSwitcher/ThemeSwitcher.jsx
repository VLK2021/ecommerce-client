import React from 'react';

import styles from './ThemeSwitcher.module.css';
import {useThemeContext} from "../../contex/index.js";


const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useThemeContext();


    return (
        <button
            className={`${styles.themeToggle} ${styles[theme]}`}
            onClick={toggleTheme}
            aria-label="Перемкнути тему"
        >
            <div className={styles.icon}>
                {theme === 'light' ? '🔆' : '🌙'}
            </div>
        </button>
    );
};

export {ThemeSwitcher};
