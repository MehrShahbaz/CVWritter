import { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { jobProjectsSchema } from 'schema/userDetailsSchema';
import { DetailsEditProps, ProjectsType, UserDatatype } from 'types/userTypes';

import ProjectFieldArray from './ProjectFieldArray/ProjectFieldArray';

const EditProjects = ({ userData, handleUpdate, setShowFalse }: DetailsEditProps): JSX.Element => {
  const handleSubmit = useCallback(
    (values: { projects: ProjectsType[] }) => {
      const data: UserDatatype = { ...userData, projects: values.projects };

      handleUpdate(data);
      setShowFalse();
    },
    [userData, handleUpdate, setShowFalse]
  );

  return (
    <Formik
      initialValues={{ projects: userData.projects }}
      onSubmit={handleSubmit}
      validationSchema={jobProjectsSchema}
    >
      {({ dirty: isDirty, isValid }) => (
        <Form>
          <div>
            <ProjectFieldArray />
            <div className="mb-4 flex justify-end gap-3">
              <button
                onClick={() => setShowFalse()}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isDirty || !isValid}
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ${
                  (!isDirty || !isValid) && 'opacity-50 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditProjects;
