import { useCallback } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom';
import { useJobs } from 'context/jobContext';
import { useAuth } from 'layout/Layout';
import { LoadingStateTypes } from 'types/loadingTypes';
import { UserDatatype } from 'types/userTypes';

import {
  UserDetailsForm,
  UserEducationForm,
  UserExperienceForm,
  UserPersonalDetailsForm,
  UserProjectsForm,
  UserSkillsForm,
} from 'components/shared/UserDataForms';
import { updateJob } from 'services/jobsService';

const UserForm = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const { selectedJob, setSelectedJob } = useJobs();
  const authResult = useAuth();
  const handleUpdate = useCallback(
    (data: UserDatatype) => {
      if (productId && authResult.type === LoadingStateTypes.LOADED) {
        updateJob(authResult.user.uid, productId, { user_details: JSON.stringify(data) }).then((res) => {
          if (res) {
            setSelectedJob(res);
          }
        });
      }
    },
    [productId, setSelectedJob, authResult]
  );

  if (!selectedJob) {
    return <div />;
  }

  const userData: UserDatatype = JSON.parse(selectedJob.user_details);

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

export default UserForm;
