import { View } from '@react-pdf/renderer';
import { ProjectsType } from 'types/userTypes';

import Details from '../Details/Details';
import Heading from '../Heading/Heading';
import SubHeading from '../SubHeading/SubHeading';

type UserProjectsProps = {
  projects: ProjectsType[];
};

const UserProjects = ({ projects }: UserProjectsProps): JSX.Element => (
  <>
    <Heading heading="Projects" />
    {projects.map(({ name, title, details }, index) => (
      <View key={index}>
        <SubHeading heading={name} isBold willMarginTop={index !== 0} />
        {title && <SubHeading heading={title} />}
        <Details details={details} />
      </View>
    ))}
  </>
);

export default UserProjects;
