import Accordion from 'react-bootstrap/Accordion';

import dummyData from 'components/PdfDocument/data';

const UserPersonalDetailsForm = (): JSX.Element => {
  const { firstName, lastName, address, phoneNumber, linkedinUrl, email } = dummyData.personalDetails;

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Personal Details</Accordion.Header>
      <Accordion.Body>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="font-bold">First Name</div>
            <div>{firstName}</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Last Name</div>
            <div>{lastName}</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Address</div>
            <div>{address}</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Phone Number</div>
            <div>{phoneNumber}</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">LinkedIn URL</div>
            <div>{linkedinUrl}</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Email</div>
            <div>{email}</div>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserPersonalDetailsForm;
