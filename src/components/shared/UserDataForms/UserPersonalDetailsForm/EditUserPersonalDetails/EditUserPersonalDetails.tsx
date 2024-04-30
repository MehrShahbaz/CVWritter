import { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import { personalDetailsSchema } from 'schema/userDetailsSchema';
import { DetailsEditProps, UserDatatype, UserPersonalDetailsType } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';

const EditUserPersonalDetails = ({ userData, handleUpdate, setShowFalse }: DetailsEditProps): JSX.Element => {
  const handleSubmit = useCallback(
    (values: UserPersonalDetailsType) => {
      const data: UserDatatype = { ...userData, personalDetails: values };

      handleUpdate(data);
      setShowFalse();
    },
    [userData, handleUpdate, setShowFalse]
  );

  return (
    <Formik initialValues={userData.personalDetails} onSubmit={handleSubmit} validationSchema={personalDetailsSchema}>
      {({ dirty: isDirty, errors, values, isValid }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              heading="First Name"
              errors={errors.firstName}
              component={InputField}
              value={values.firstName}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              heading="Last Name"
              errors={errors.lastName}
              component={InputField}
              value={values.lastName}
            />
            <Field
              type="text"
              name="email"
              placeholder="Email"
              heading="Email"
              errors={errors.email}
              component={InputField}
              value={values.email}
            />
            <Field
              type="text"
              name="address"
              placeholder="Address"
              heading="Address"
              errors={errors.address}
              component={InputField}
              value={values.address}
            />
            <Field
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              heading="Phone Number"
              errors={errors.phoneNumber}
              component={InputField}
              value={values.phoneNumber}
            />
            <Field
              type="text"
              name="linkedinUrl"
              placeholder="Linkedin Url"
              heading="Linkedin Url"
              errors={errors.linkedinUrl}
              component={InputField}
              value={values.linkedinUrl}
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

export default EditUserPersonalDetails;
