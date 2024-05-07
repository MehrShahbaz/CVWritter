import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useUser } from 'context/userContext';
import Layout from 'layout/Layout';

import JobDetails from 'components/JobDetails/JobDetails';
import ErrorPage from 'components/shared/ErrorPage/ErrorPage';
import LoginPage from 'components/Signup/LoginSignUpForm';
import UserJobs from 'components/UserJobs/UserJobs';
import UserPage from 'components/UserPage/UserPage';

import { urls } from './urls';

const RouterConfig = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<UserJobs />} />
        <Route path={urls.jobs} element={<UserJobs />} />
        <Route path={`${urls.jobs}/:productId`} element={<JobDetails />} />
        <Route path={urls.user} element={<UserPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default RouterConfig;
