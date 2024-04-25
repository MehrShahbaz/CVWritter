import Accordion from 'react-bootstrap/Accordion';

import dummyData from '../../../components/Document/data';

const UserDetailsForm = (): JSX.Element => {
  const { userDetails } = dummyData;
  const { firstName, lastName, title, address, phoneNumber, linkedinUrl, email, aboutMe } = userDetails;

  return (
    <Accordion.Item eventKey={`0`}>
      <Accordion.Header>User Details</Accordion.Header>
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
            <div className="font-bold">Job Title</div>
            <div>{title}</div>
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
