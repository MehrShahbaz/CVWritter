import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { UserComponentType } from 'types/userTypes';

import { EditIcon } from 'assets';

import EditProjects from './EditProjects/EditProjects';
import ShowProjects from './ShowProjects/ShowProjects';

const UserProjectsForm = ({ userData, handleUpdate }: UserComponentType): JSX.Element => {
  const [isEdit, setEdit] = useState(false);

  return (
    <Accordion.Item eventKey={`4`}>
      <Accordion.Header>Projects</Accordion.Header>
      <Accordion.Body>
        <div className="flex justify-end mb-3">
          <button onClick={() => setEdit(!isEdit)}>
            <img src={EditIcon} alt="Edit Icon" height={20} width={20} />
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          {isEdit ? (
            <EditProjects userData={userData} handleUpdate={handleUpdate} setShowFalse={() => setEdit(false)} />
          ) : (
            <ShowProjects userData={userData} />
          )}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserProjectsForm;
