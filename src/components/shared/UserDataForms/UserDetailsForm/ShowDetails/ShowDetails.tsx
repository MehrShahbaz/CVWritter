import { DetailsComponentProps } from 'types/userTypes';

const ShowDetails = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { title, aboutMe } = userData.jobDetails;

  return (
    <div>
      <div className="mb-4">
        <div className="font-bold">Job Title</div>
        <div>{title}</div>
      </div>
      <div>
        <div className="font-bold">About Me</div>
        <div>{aboutMe}</div>
      </div>
    </div>
  );
};

export default ShowDetails;
