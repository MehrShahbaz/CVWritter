import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { UserComponentType } from 'types/userTypes';

import { EditIcon } from 'assets';

import EditEducation from './EditEducation/EditEducation';
import ShowEducation from './ShowEducation/ShowEducation';

const UserEducationForm = ({ userData, handleUpdate }: UserComponentType): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  return (
    <Accordion.Item eventKey={`2`} className="relative">
      <Accordion.Header>Education</Accordion.Header>
      <Accordion.Body>
        <div>
          <div className="flex justify-end mb-3">
            <button onClick={() => setEdit(!isEdit)}>
              <img src={EditIcon} alt="Google logo" height={20} width={20} />
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            {isEdit ? (
              <EditEducation userData={userData} handleUpdate={handleUpdate} setShowFalse={() => setEdit(false)} />
            ) : (
              <ShowEducation userData={userData} />
            )}
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserEducationForm;
