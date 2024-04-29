import { useCallback, useEffect, useState } from 'react';
import { useJobs } from 'context/jobContext';

import { getAllJobs } from 'services/jobsService';

import AddJobsModal from './AddJobsModal/AddJobsModal';
import JobCard from './JobCards/JobCard';

const UserJobs = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setJob } = useJobs();

  useEffect(() => {
    onGetAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGetAllJobs = useCallback(() => {
    getAllJobs().then((res) => setJob(res));
  }, [setJob]);

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
      {isModalOpen && <AddJobsModal isOpen={isModalOpen} setOpen={setIsModalOpen} successCallback={onGetAllJobs} />}
    </div>
  );
};

export default UserJobs;
