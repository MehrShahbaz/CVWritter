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
import { userId } from 'constants/jobConstants';
import { updateUser } from 'services/userService';

const UserCard = (): JSX.Element => {
  const { user, setUser } = useUser();
  const handleUpdate = useCallback(
    (data: UserDatatype) => {
      if (userId) {
        updateUser(userId, { details: JSON.stringify(data) }).then((res) => {
          if (res) {
            setUser(res);
          }
        });
      }
    },
    [setUser]
  );

  if (!user) {
    return <div className="text-center text-gray-500">No Data available at the moment</div>;
  }

  const { details } = user;
  const userData: UserDatatype = JSON.parse(details);

  return (
    <Accordion>
      <UserPersonalDetailsForm handleUpdate={handleUpdate} userData={userData} />
      <UserDetailsForm handleUpdate={handleUpdate} userData={userData} />
      <UserEducationForm handleUpdate={handleUpdate} userData={userData} />
      <UserExperienceForm handleUpdate={handleUpdate} userData={userData} />
      <UserProjectsForm handleUpdate={handleUpdate} userData={userData} />
      <UserSkillsForm handleUpdate={handleUpdate} userData={userData} />
    </Accordion>
  );
};

export default UserCard;
