import Accordion from 'react-bootstrap/Accordion';

import dummyData from 'components/PdfDocument/data';

const UserDetailsForm = (): JSX.Element => {
  const { jobDetails } = dummyData;
  const { aboutMe, title } = jobDetails;

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Job Details</Accordion.Header>
      <Accordion.Body>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="font-bold">Job Title</div>
            <div>{title}</div>
          </div>
          <div>
            <div className="font-bold">About Me</div>
            <div>{aboutMe}</div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserDetailsForm;
