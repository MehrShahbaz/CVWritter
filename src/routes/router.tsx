import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from 'components/shared/ErrorPage/ErrorPage';
import UserJobs from 'components/UserJobs/UserJobs';

import { urls } from './urls';

export const router = createBrowserRouter([
  {
    path: urls.home,
    element: <UserJobs />,
    errorElement: <ErrorPage />,
  },
  {
    path: urls.jobs,
    element: <UserJobs />,
  },
]);
