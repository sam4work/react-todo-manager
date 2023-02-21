import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {

  if (!localStorage.getItem('token')) {
    return (
      <Navigate
        to={{
          pathname: '/login',
									}}
									replace={true}
      />
    );
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
