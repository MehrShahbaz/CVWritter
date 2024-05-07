import { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { jobSkillsFormSchema } from 'schema/userDetailsSchema';
import { DetailsEditProps, UserDatatype } from 'types/userTypes';

import SkillsFieldArray from 'components/shared/SkillsFieldArray/SkillsFieldArray';

const EditSkills = ({ userData, handleUpdate, setShowFalse }: DetailsEditProps): JSX.Element => {
  const handleSubmit = useCallback(
    (values: { skills: string[] }) => {
      const data: UserDatatype = { ...userData, skills: values.skills };

      handleUpdate(data);
      setShowFalse();
    },
    [userData, handleUpdate, setShowFalse]
  );

  return (
    <Formik initialValues={{ skills: userData.skills }} onSubmit={handleSubmit} validationSchema={jobSkillsFormSchema}>
      {() => (
        <Form>
          <div>
            <SkillsFieldArray />
            <div className="mb-4 flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowFalse()}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center 
                `}
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

export default EditSkills;
