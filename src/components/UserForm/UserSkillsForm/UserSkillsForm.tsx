import Accordion from 'react-bootstrap/Accordion';

import dummyData from '../../../components/Document/data';

const UserSkillsForm = (): JSX.Element => {
  const { skills } = dummyData;

  return (
    <Accordion.Item eventKey={`4`}>
      <Accordion.Header>Skills</Accordion.Header>
      <Accordion.Body>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserSkillsForm;
