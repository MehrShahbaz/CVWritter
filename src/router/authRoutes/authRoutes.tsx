import { createBrowserRouter } from 'react-router-dom';

import LoginSignUpForm from 'components/Signup/LoginSignUpForm';

export const authRoutes = createBrowserRouter([
  {
    path: '*',
    element: <LoginSignUpForm />,
  },
  {
    path: '/login',
    element: <LoginSignUpForm />,
  },
]);
