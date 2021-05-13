import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/' /* webpackChunkName: "RegisterPage" */),
);

const PhonebookPage = lazy(() =>
  import('./pages/PhonebookPage/' /* webpackChunkName: "PhonebookPage" */),
);

const routes = [
  { path: '/', exact: true, label: 'Home', component: HomePage },
  { path: '/login', label: 'Login', component: LoginPage },
  { path: '/register', label: 'Register', component: RegisterPage },
  { path: '/phonebook', label: 'Phonebook', component: PhonebookPage },
];

export default routes;
