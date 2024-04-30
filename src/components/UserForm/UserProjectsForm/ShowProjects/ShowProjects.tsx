import { DetailsComponentProps } from 'types/userTypes';

const ShowProjects = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { projects } = userData;

  if (projects.length === 1 && projects[0].name.length === 0) {
    return <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">No Projects At the Moment</div>;
  }

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-md mb-4 text-sm">
          <div>
            <div className="mb-1 text-lg">
              <div className="font-bold">Project {index + 1}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Project Name</div>
              <div>{project.name}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">User Title</div>
              <div>{project.title}</div>
            </div>
            <div className="mb-1">
              <div className="font-bold">Details</div>
              <ol className="list-decimal pl-6">
                {project.details.map((detail, idx) => (
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

export default ShowProjects;
