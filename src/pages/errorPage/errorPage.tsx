import React from 'react';
import Header from '../../components/header/header';
import {AppRoutes} from '../../routes/AppRoutes';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <Header />
      <h1>Looks like there is no page you are looking for</h1>
      <Link to={AppRoutes.Main}>Go to main page</Link>
    </>
  );
}

export default ErrorPage;
