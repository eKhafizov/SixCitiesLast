import React, {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';

type PrivateRouteType = PropsWithChildren<{
  auth: string;
  children: JSX.Element;
}>

function PrivateRoute({auth, children}: PrivateRouteType) : JSX.Element {

  return (auth === 'Auth')
    ? (children)
    : (<Navigate to={AppRoutes.Login} />);
}

export default PrivateRoute;
