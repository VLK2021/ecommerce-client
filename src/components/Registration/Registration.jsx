import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import css from './Registration.module.css';


const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm();

    const onSubmit = (data) => {
        try {
            data.login(data);
        }catch (err) {
            console.log(err);
        }
    }


    return (
        <div className={css.registerPage}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={css.title}>Реєстрація</h2>

                <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                />
                {errors.email && <p className={css.error}>{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Пароль"
                    {...register('password')}
                />
                {errors.password && <p className={css.error}>{errors.password.message}</p>}

                <button type="submit" className={css.submit} disabled={isSubmitting}>
                    {isSubmitting ? 'Зачекайте...' : 'Зареєструватися'}
                </button>

                <p className={css.redirect}>
                    Вже маєте акаунт? <Link to="/login">Увійти</Link>
                </p>
            </form>
        </div>
    );
};

export {Registration};