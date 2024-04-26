import { Field, FieldArray, useFormikContext } from 'formik';
import { JobFormType } from 'types/jobTypes';

import InputField from 'components/shared/InputField/InputField';

const SkillsFieldArray = (): JSX.Element => {
  const { values } = useFormikContext<JobFormType>();

  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        const { remove, push } = arrayHelpers;
        const { skills } = values;
        const isDisabled = skills.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Skills</div>
              <button
                type="button"
                onClick={() => push('')}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
              >
                +
              </button>
            </div>
            {skills.map((_skill, index) => (
              <div>
                <div key={index} className="flex justify-between items-center">
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`skills.${index}`}
                      placeholder="Skill"
                      heading={`Skill ${index + 1}`}
                      component={InputField}
                    />
                  </div>
                  <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => remove(index)}
                    className={`px-3 py-1 rounded-md focus:outline-none ${
                      isDisabled
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

export default SkillsFieldArray;
