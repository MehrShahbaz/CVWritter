import { useJobs } from 'context/jobContext';

const JobCard = (): JSX.Element => {
  const { jobs } = useJobs();

  if (!jobs?.length) {
    return <div className="text-center text-gray-500">No jobs available at the moment</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(({ name, description, skills, url }, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-md">
          <div className="font-semibold">
            <a href={url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {name}
            </a>
          </div>
          <div className="mt-2 mb-4 text-gray-600">Description:</div>
          <div className="text-sm mb-4">{description}</div>
          <div className="mb-2 text-gray-600">Skills:</div>
          <div className="flex flex-wrap">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 mr-2 mb-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
