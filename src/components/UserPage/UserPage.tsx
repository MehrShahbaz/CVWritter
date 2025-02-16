import { useCallback, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { useAuth } from 'layout/Layout';
import { LoadingStateTypes } from 'types/loadingTypes';
import { UserDatatype } from 'types/userTypes';

import MyDocument from 'components/PdfDocument/Document';
import { getUser } from 'services/userService';

import UserCard from './UserCard/UserCard';

const UserPage = (): JSX.Element => {
  const authResult = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    onGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGetUser = useCallback(() => {
    if (authResult.type === LoadingStateTypes.LOADED) {
      getUser(authResult.user.uid).then((res) => setUser(res));
    }
  }, [setUser, authResult]);

  if (!user) {
    return <div />;
  }

  const data: UserDatatype = JSON.parse(user.details);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="items-center">
        <div className="text-3xl font-semibold mb-4">User Details</div>
        <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
          <p className="text-gray-800 font-bold">User Data Note:</p>
          <p className="text-gray-700">
            This user data will serve as the default template for all job CVs upon creation. It will populate initial
            CVs for each job listing. Individual job data can be modified as needed.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <UserCard />
      </div>
      <MyDocument data={data} />
    </div>
  );
};

export default UserPage;
