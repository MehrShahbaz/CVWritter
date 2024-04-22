import { createBrowserRouter } from 'react-router-dom';

import Home from 'components/Home/Home';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
