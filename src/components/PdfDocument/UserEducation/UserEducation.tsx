/* eslint-disable no-unused-vars */
import { EducationType } from 'types/userTypes';

import { convertDate } from '../../../helpers/appHelper';
import Heading from '../Heading/Heading';
import SubHeading from '../SubHeading/SubHeading';

type UserEducationProps = {
  education: EducationType;
};

const UserEducation = ({ education }: UserEducationProps): JSX.Element => {
  const { university, location, program, startDate, endDate } = education;

  return (
    <>
      <Heading heading="Education" />
      <SubHeading heading={university} subHeading={location} isBold />
      <SubHeading heading={program} subHeading={convertDate(startDate, endDate)} />
    </>
  );
};

export default UserEducation;
