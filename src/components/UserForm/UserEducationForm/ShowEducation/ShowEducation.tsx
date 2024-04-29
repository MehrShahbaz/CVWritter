import { DetailsComponentProps } from 'types/userTypes';

const ShowEducation = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { university, program, location, startDate, endDate } = userData.education;

  return (
    <div>
      <div className="mb-4">
        <div className="font-bold">University</div>
        <div>{university}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Major</div>
        <div>{program}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Location</div>
        <div>{location}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">Start Date</div>
        <div>{startDate}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold">End Date</div>
        <div>{endDate}</div>
      </div>
    </div>
  );
};

export default ShowEducation;
