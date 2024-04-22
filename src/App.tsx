import { RouterProvider } from 'react-router-dom';

import { useRouter } from './router/appRouter';

import './App.css';

const App = (): JSX.Element => {
  const router = useRouter();

  return <RouterProvider router={router} />;
};

export default App;
