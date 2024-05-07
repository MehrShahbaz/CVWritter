import { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import { educationFromSchema } from 'schema/userDetailsSchema';
import { DetailsEditProps, EducationType, UserDatatype } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';

const EditEducation = ({ userData, handleUpdate, setShowFalse }: DetailsEditProps): JSX.Element => {
  const handleSubmit = useCallback(
    (values: EducationType) => {
      const data: UserDatatype = { ...userData, education: values };

      handleUpdate(data);
      setShowFalse();
    },
    [userData, handleUpdate, setShowFalse]
  );

  return (
    <Formik initialValues={userData.education} onSubmit={handleSubmit} validationSchema={educationFromSchema}>
      {({ dirty: isDirty, errors, values, isValid }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="university"
              placeholder="University"
              heading="University Name"
              errors={errors.university}
              component={InputField}
              value={values.university}
            />
            <Field
              type="text"
              name="program"
              placeholder="Major"
              heading="Major Name"
              errors={errors.program}
              component={InputField}
              value={values.program}
            />
            <Field
              type="text"
              name="location"
              placeholder="Location"
              heading="Location Name"
              errors={errors.location}
              component={InputField}
              value={values.location}
            />
            <Field
              type="text"
              name="startDate"
              placeholder="Start Date"
              heading="Start Date"
              errors={errors.startDate}
              component={InputField}
              value={values.startDate}
            />
            <Field
              type="text"
              name="endDate"
              placeholder="End Date"
              heading="End Date"
              errors={errors.endDate}
              component={InputField}
              value={values.endDate}
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

export default EditEducation;
