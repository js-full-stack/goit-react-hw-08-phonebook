import routes from '../../routes';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import Spinner from '../Loader';

const Content = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(({ path, exact, label, component: Component }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              component={Component}
              label={label}
            />
          ))}
          <Spinner />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
