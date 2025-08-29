import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import css from "./SocialIcons.module.css";


const SocialIcons = () => {


    return (
        <div className={css.wrap}>
            <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.iconBox}
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>

            <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.iconBox}
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>

            <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.iconBox}
                aria-label="Twitter"
            >
                <FaTwitter />
            </a>

            <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.iconBox}
                aria-label="YouTube"
            >
                <FaYoutube />
            </a>
        </div>
    );
};

export { SocialIcons };
