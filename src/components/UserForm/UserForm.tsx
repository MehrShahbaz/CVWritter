import Accordion from 'react-bootstrap/Accordion';

import UserDetailsForm from './UserDetailsForm/UserDetailsForm';
import UserEducationForm from './UserEducationForm/UserEducationForm';
import UserExperienceForm from './UserExperienceFrom/UserExperienceFrom';
import UserProjectsForm from './UserProjectsForm/UserProjectsForm';
import UserSkillsForm from './UserSkillsForm/UserSkillsForm';

const UserForm = (): JSX.Element => (
  <Accordion defaultActiveKey="0">
    <UserDetailsForm />
    <UserEducationForm />
    <UserExperienceForm />
    <UserProjectsForm />
    <UserSkillsForm />
  </Accordion>
);

export default UserForm;
