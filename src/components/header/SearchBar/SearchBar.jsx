import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

import css from "./SearchBar.module.css";


const SearchBar = () => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: { query: "" },
        mode: "onSubmit",
    });

    const submit = ({ query }) => {
        const q = query.trim();

        console.log(q);
    };

    const value = watch("query");


    return (
        <form className={css.wrap} onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                placeholder="пошук товарів"
                className={css.input}
                aria-label="Пошук товарів"
                {...register("query")}
            />

            <button
                type="submit"
                className={css.searchBtn}
                aria-label="Шукати"
                title="Шукати"
                disabled={!value?.trim()}
            >
                <FaSearch className={css.icon} />
            </button>
        </form>
    );
};

export { SearchBar };
