import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={ROUTES.SIGN_IN} activeClassName="active">Sign In</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.LANDING} activeClassName="active">Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME} activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT} activeClassName="active">Account</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ADMIN} activeClassName="active">Admin</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
