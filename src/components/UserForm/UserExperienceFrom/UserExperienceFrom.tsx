import Accordion from 'react-bootstrap/Accordion';

import dummyData from '../../PdfDocument/data';

const UserExperienceForm = (): JSX.Element => {
  const { experience } = dummyData;

  return (
    <Accordion.Item eventKey={`2`}>
      <Accordion.Header>Experience</Accordion.Header>
      <Accordion.Body>
        {experience.map((exp, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <div className="mb-2 font-bold">{exp.organization}</div>
            <div className="mb-2">{exp.title}</div>
            <div className="mb-2">{exp.location}</div>
            <div className="mb-2">
              {exp.startDate} - {exp.endDate || 'Present'}
            </div>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserExperienceForm;
