import { DetailsComponentProps } from 'types/userTypes';

const ShowUserPersonalDetails = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { firstName, lastName, address, phoneNumber, linkedinUrl, email } = userData.personalDetails;

  return (
    <div>
      <div className="mb-4">
        <div className="font-bold">First Name</div>
        <div>{firstName}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Last Name</div>
        <div>{lastName}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Email</div>
        <div>{email}</div>
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
    </div>
  );
};

export default ShowUserPersonalDetails;
