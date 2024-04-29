import { useCallback } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom';
import { useJobs } from 'context/jobContext';
import { UserDatatype } from 'types/userTypes';

import { updateJob } from 'services/jobsService';

import UserDetailsForm from './UserDetailsForm/UserDetailsForm';
import UserEducationForm from './UserEducationForm/UserEducationForm';
import UserExperienceForm from './UserExperienceFrom/UserExperienceFrom';
import UserPersonalDetailsForm from './UserPersonalDetailsForm/UserPersonalDetailsForm';
import UserProjectsForm from './UserProjectsForm/UserProjectsForm';
import UserSkillsForm from './UserSkillsForm/UserSkillsForm';

const UserForm = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const { selectedJob, setSelectedJob } = useJobs();
  const handleUpdate = useCallback(
    (data: UserDatatype) => {
      if (productId) {
        updateJob(productId, { user_details: JSON.stringify(data) }).then((res) => {
          if (res) {
            setSelectedJob(res);
          }
        });
      }
    },
    [productId, setSelectedJob]
  );

  if (!selectedJob) {
    return <div />;
  }

  const userData: UserDatatype = JSON.parse(selectedJob.user_details);

  return (
    <Accordion>
      <UserPersonalDetailsForm />
      <UserDetailsForm />
      <UserEducationForm handleUpdate={handleUpdate} userData={userData} />
      <UserExperienceForm />
      <UserProjectsForm />
      <UserSkillsForm />
    </Accordion>
  );
};

export default UserForm;
