import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';

const Home = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const loggedOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  console.log(1);

  return (
    <div>
      <div>Welcome To the App</div>
      <button onClick={loggedOut} className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
        Logout
      </button>
    </div>
  );
};

export default Home;
