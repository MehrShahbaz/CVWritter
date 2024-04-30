import { useCallback, useEffect, useState } from 'react';
import { useJobs } from 'context/jobContext';
import { useUser } from 'context/userContext';
import { useAuth } from 'layout/Layout';
import { LoadingStateTypes } from 'types/loadingTypes';

import { getAllJobs } from 'services/jobsService';
import { getUser } from 'services/userService';

import AddJobsModal from './AddJobsModal/AddJobsModal';
import JobCard from './JobCards/JobCard';

const UserJobs = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setJobs } = useJobs();
  const authResult = useAuth();
  const { setUser } = useUser();

  useEffect(() => {
    onGetAllJobs();
    onGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGetAllJobs = useCallback(() => {
    getAllJobs().then((res) => setJobs(res));
  }, [setJobs]);
  const onGetUser = useCallback(() => {
    if (authResult.type === LoadingStateTypes.LOADED) {
      getUser(authResult.user.uid).then((res) => setUser(res));
    }
  }, [setUser, authResult]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold mb-4">Jobs</div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsModalOpen(true)}
        >
          Add Job
        </button>
      </div>
      <div className="mt-8">
        <JobCard />
      </div>
      {isModalOpen && <AddJobsModal isOpen={isModalOpen} setOpen={setIsModalOpen} />}
    </div>
  );
};

export default UserJobs;
