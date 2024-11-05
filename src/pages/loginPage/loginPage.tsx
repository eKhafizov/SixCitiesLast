import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';
import {useFetchLoginMutation} from '../../features/sixCitiesApi';

function LoginPage() {


  const [fetchLogin] = useFetchLoginMutation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  const sendForm = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchLogin(form);
    navigate(AppRoutes.Main);
  };

  const submitHandle = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={submitHandle}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={changeForm} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={changeForm} />
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={sendForm}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>);
}

export default LoginPage;
