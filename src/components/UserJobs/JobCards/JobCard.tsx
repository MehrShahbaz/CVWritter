import { Link } from 'react-router-dom';
import { useJobs } from 'context/jobContext';

import { urls } from 'routes/urls';

const JobCard = (): JSX.Element => {
  const { jobs } = useJobs();

  if (!jobs?.length) {
    return <div className="text-center text-gray-500">No jobs available at the moment</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(({ id, name, description, skills }, index) => (
        <div
          key={index}
          style={{ maxHeight: '30rem', overflowY: 'auto' }}
          className="bg-white shadow-md p-4 rounded-md"
        >
          <div className="font-semibold">
            <Link className="text-blue-500 hover:underline" to={`${urls.jobs}/${id}`}>
              {name}
            </Link>
          </div>
          <div className="mt-2 mb-4 text-gray-600">Description:</div>
          <div className="text-sm mb-4">{description}</div>
          <div className="mb-2 text-gray-600">Skills:</div>
          <div className="flex flex-wrap">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 mr-2 mb-2">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
