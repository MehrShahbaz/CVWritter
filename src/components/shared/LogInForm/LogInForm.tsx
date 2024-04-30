import { Field, Form, Formik } from 'formik';
import { FORM_INTIAL_VALUES, LoginDataType } from 'types/loginTypes';

import InputField from '../InputField/InputField';

type LogInFormProps = {
  handleSubmit: (data: LoginDataType) => void;
};

const LogInForm = ({ handleSubmit }: LogInFormProps): JSX.Element => (
  <Formik initialValues={FORM_INTIAL_VALUES} onSubmit={handleSubmit}>
    {({ errors, dirty: isDirty, isValid }) => (
      <Form>
        <div className="flex gap-2 p-4 my-3 flex-col bg-gray-100 rounded-lg shadow-md">
          <Field
            type="text"
            name="email"
            placeholder="Email"
            heading="Email"
            errors={errors.email}
            component={InputField}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            heading="Password"
            errors={errors.email}
            component={InputField}
          />
          <button
            disabled={!isDirty || !isValid}
            type="submit"
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded items-center ${
              (!isDirty || !isValid) && 'opacity-50 cursor-not-allowed'
            }`}
          >
            Log in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default LogInForm;
