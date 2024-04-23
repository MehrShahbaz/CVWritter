import { View } from '@react-pdf/renderer';

import { WorkExperienceType } from '@/types/userTypes';

import { convertDate } from '../../../helpers/appHelper';
import Details from '../Details/Details';
import Heading from '../Heading/Heading';
import SubHeading from '../SubHeading/SubHeading';

type UserWorkExperienceProps = {
  workExperience: WorkExperienceType[];
};

const UserWorkExperience = ({ workExperience }: UserWorkExperienceProps): JSX.Element => (
  <>
    <Heading heading="Work Experience" />
    {workExperience.map(({ organization, location, title, startDate, endDate, details }) => (
      <View>
        <SubHeading heading={organization} subHeading={location} isMarginBottom isBold />
        <SubHeading heading={title} subHeading={convertDate(startDate, endDate)} />
        <Details details={details} />
      </View>
    ))}
  </>
);

export default UserWorkExperience;
