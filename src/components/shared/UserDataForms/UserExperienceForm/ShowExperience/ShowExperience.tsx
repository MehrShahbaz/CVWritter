import { DetailsComponentProps } from 'types/userTypes';

const ShowExperience = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { experience } = userData;

  if (experience.length === 1 && experience[0].title.length === 0) {
    return <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">No Experience added At the Moment</div>;
  }

  return (
    <div>
      {experience.map((exp, index) => (
        <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-md mb-4 text-sm">
          <div>
            <div className="mb-1 text-lg">
              <div className="font-bold">Experience {index + 1}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Organization</div>
              <div>{exp.organization}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Title</div>
              <div>{exp.title}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Location</div>
              <div>{exp.location}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Start Date</div>
              <div>{exp.startDate}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">End Date</div>
              <div>{exp.endDate}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Details</div>
              <ol className="list-decimal pl-6">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="mt-2">
                    {detail}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowExperience;
