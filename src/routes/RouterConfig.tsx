import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';

import JobDetails from 'components/jobDetails/JobDetails';
import ErrorPage from 'components/shared/ErrorPage/ErrorPage';
import UserJobs from 'components/UserJobs/UserJobs';

import { urls } from './urls';

const RouterConfig = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<UserJobs />} />
        <Route path={urls.jobs} element={<UserJobs />} />
        <Route path={`${urls.jobs}/:productId`} element={<JobDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterConfig;
