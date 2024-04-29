import { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import { jobDetailsFormSchema } from 'schema/userDetailsSchema';
import { DetailsEditProps, UserDatatype, UserJobDetailsType } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';
import InputTextField from 'components/shared/InputTextField/InputTextField';

const EditDetails = ({ userData, handleUpdate, setShowFalse }: DetailsEditProps): JSX.Element => {
  const handleSubmit = useCallback(
    (values: UserJobDetailsType) => {
      const data: UserDatatype = { ...userData, jobDetails: values };

      handleUpdate(data);
      setShowFalse();
    },
    [userData, handleUpdate, setShowFalse]
  );

  return (
    <Formik initialValues={userData.jobDetails} onSubmit={handleSubmit} validationSchema={jobDetailsFormSchema}>
      {({ dirty: isDirty, errors, values, isValid }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              heading="Title Name"
              errors={errors.title}
              component={InputField}
              value={values.title}
            />
            <Field
              type="text"
              name="aboutMe"
              placeholder="Summary"
              heading="Summary"
              errors={errors.aboutMe}
              component={InputTextField}
              value={values.aboutMe}
            />
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

export default EditDetails;
