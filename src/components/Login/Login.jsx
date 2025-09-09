import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from './Login.module.css';


const Login = () => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);

            navigate('/home');
        } catch (e) {
            alert('Невірні облікові дані');
            console.log(e);
        }
    };


    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={css.title}>Вхід</h2>

                <label className={css.label}>Email</label>
                <input
                    type="email"
                    {...register('email')}
                    className={css.input}
                />
                {errors.email && <span className={css.error}>{errors.email.message}</span>}

                <label className={css.label}>Пароль</label>
                <input
                    type="password"
                    {...register('password')}
                    className={css.input}
                />
                {errors.password && <span className={css.error}>{errors.password.message}</span>}

                <button type="submit" className={css.button} disabled={isSubmitting}>
                    {isSubmitting ? 'Зачекайте...' : 'Увійти'}
                </button>

                <p className={css.registerLink}>
                    Немає акаунта?{' '}
                    <span onClick={() => navigate('/register')} className={css.link}>
            Зареєструватися
          </span>
                </p>
            </form>
        </div>
    );
};

export {Login};