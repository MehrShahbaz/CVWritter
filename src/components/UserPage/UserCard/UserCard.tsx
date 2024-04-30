import { useCallback } from 'react';
import { Accordion } from 'react-bootstrap';
import { useUser } from 'context/userContext';
import { UserDatatype } from 'types/userTypes';

import {
  UserDetailsForm,
  UserEducationForm,
  UserExperienceForm,
  UserPersonalDetailsForm,
  UserProjectsForm,
  UserSkillsForm,
} from 'components/shared/UserDataForms';

const UserCard = (): JSX.Element => {
  const { user } = useUser();
  const handleUpdate = useCallback((data: UserDatatype) => {
    console.log(data);
  }, []);

  if (!user) {
    return <div className="text-center text-gray-500">No Data available at the moment</div>;
  }

  const { details } = user;
  const userData: UserDatatype = JSON.parse(details);

  return (
    <Accordion>
      <UserPersonalDetailsForm />
      <UserDetailsForm handleUpdate={handleUpdate} userData={userData} />
      <UserEducationForm handleUpdate={handleUpdate} userData={userData} />
      <UserExperienceForm handleUpdate={handleUpdate} userData={userData} />
      <UserProjectsForm handleUpdate={handleUpdate} userData={userData} />
      <UserSkillsForm handleUpdate={handleUpdate} userData={userData} />
    </Accordion>
  );
};

export default UserCard;
