import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useJobs } from 'context/jobContext';

import MyDocument from 'components/PdfDocument/Document';
import UserForm from 'components/UserForm/UserForm';
import { getJob } from 'services/jobsService';

const JobDetails = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const { setSelectedJob, selectedJob } = useJobs();
  const onGetJob = useCallback(() => {
    if (productId) {
      getJob(productId).then((res) => {
        if (res) {
          setSelectedJob(res);
        }
      });
    }
  }, [productId, setSelectedJob]);

  useEffect(() => {
    onGetJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedJob) {
    return <div>Loading!!</div>;
  }

  const { name, description, url, skills } = selectedJob;

  return (
    <div className="bg-gray-100 p-9">
      <div className="bg-gray-200 rounded shadow-md mb-5 p-4">
        <div>
          <a href={url} target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:underline">
            {name}
          </a>
        </div>
        <div className="text-gray-700 mt-2">{description}</div>
        <div className="mt-2">
          {skills.map(({ id, name: skillName }) => (
            <div
              key={id}
              className="inline-block bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {skillName}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 ">
        <UserForm />
      </div>
      <MyDocument />
    </div>
  );
};

export default JobDetails;
