import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { User } from 'firebase/auth';
import { firebaseAuth } from 'firebaseConfig/firebaseAuth';
import { LoadingStateTypes } from 'types/loadingTypes';

import CustomNavbar from 'components/shared/Navbar/Navbar';
import Spinner from 'components/shared/Spinner/Spinner';

export type AuthContextType =
  | {
      type: LoadingStateTypes.LOADING;
    }
  | {
      type: LoadingStateTypes.NOT_LOADED;
    }
  | {
      type: LoadingStateTypes.LOADED;
      user: User;
    };

export const useAuth = (): AuthContextType => {
  const [user, isLoading] = useAuthState(firebaseAuth);

  return isLoading
    ? {
        type: LoadingStateTypes.LOADING,
      }
    : user == null
    ? {
        type: LoadingStateTypes.NOT_LOADED,
      }
    : {
        type: LoadingStateTypes.LOADED,
        user: user,
      };
};

const Layout = (): JSX.Element => {
  const authResult = useAuth();

  if (authResult.type === LoadingStateTypes.LOADING) {
    return <Spinner />;
  } else if (authResult.type === LoadingStateTypes.NOT_LOADED) {
    window.location.href = '/login';

    return <Spinner />;
  } else {
    return (
      <div>
        <CustomNavbar />
        <div className="bg-gray-100 h-screen">
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
