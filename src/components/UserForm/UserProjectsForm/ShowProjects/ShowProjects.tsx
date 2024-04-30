import { DetailsComponentProps } from 'types/userTypes';

const ShowProjects = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { projects } = userData;

  if (projects.length === 1 && projects[0].name.length === 0) {
    return <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">No Projects At the Moment</div>;
  }

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <div className="mb-2 font-bold">{project.name}</div>
          {project.title && <div className="mb-2">{project.title}</div>}
          <ol className="list-decimal pl-6">
            {project.details.map((detail, idx) => (
              <li key={idx} className="mt-2">
                {detail}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ShowProjects;
