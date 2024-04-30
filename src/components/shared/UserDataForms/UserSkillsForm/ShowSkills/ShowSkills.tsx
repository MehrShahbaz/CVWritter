import { DetailsComponentProps } from 'types/userTypes';

const ShowSkills = ({ userData }: DetailsComponentProps): JSX.Element => {
  const { skills } = userData;

  return (
    <div className="mt-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default ShowSkills;
