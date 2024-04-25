import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import dummyData from '../../../components/Document/data';

const UserEducationForm = (): JSX.Element => {
  const { education } = dummyData;
  const { university: initialUniversity } = education;
  const [university, setUniversity] = useState(initialUniversity);
  const [isEditMode, setEditMode] = useState(false);
  const handleEdit = (): void => {
    setEditMode(true);
  };
  const handleSave = (): void => {
    // Here you can handle the form submission or save the data to the state or API
    setEditMode(false);
  };

  return (
    <Accordion.Item eventKey={`1`} className="relative">
      <Accordion.Header>Education</Accordion.Header>
      <Accordion.Body>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="font-bold">University</div>
              {!isEditMode && (
                <button onClick={handleEdit} className="cursor-pointer text-gray-400 hover:text-gray-700">
                  Edit
                </button>
              )}
            </div>
            {isEditMode ? (
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <div>{university}</div>
            )}
          </div>
          {/* Repeat the same pattern for other fields */}
        </div>
        {isEditMode && (
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Save
          </button>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserEducationForm;
