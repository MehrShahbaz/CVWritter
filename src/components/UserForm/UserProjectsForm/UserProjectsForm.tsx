import Accordion from 'react-bootstrap/Accordion';

import dummyData from '../../../components/Document/data';

const UserProjectsForm = (): JSX.Element => {
  const { projects } = dummyData;

  return (
    <Accordion.Item eventKey={`3`}>
      <Accordion.Header>Projects</Accordion.Header>
      <Accordion.Body>
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <div className="mb-2 font-bold">{project.name}</div>
            {project.title && <div className="mb-2">{project.title}</div>}
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserProjectsForm;
