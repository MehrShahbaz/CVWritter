import { Field, FieldArray, useFormikContext } from 'formik';
import { JobType } from 'types/jobTypes';

import { ArrowIcon } from 'assets';
import InputField from 'components/shared/InputField/InputField';

const SkillsFieldArray = (): JSX.Element => {
  const { values } = useFormikContext<JobType>();

  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => {
        const { remove, insert, move } = arrayHelpers;
        const { skills } = values;
        const isDisabled = skills?.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Skills</div>
              <button
                type="button"
                onClick={() => insert(0, '')}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none mr-2"
              >
                Add
              </button>
            </div>
            {skills?.map((_skill, index) => (
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
                <div className="flex gap-3">
                  {index !== 0 && (
                    <button type="button" onClick={() => move(index, index - 1)} disabled={index === 0}>
                      <img src={ArrowIcon} alt="Copy" height={20} width={20} />
                    </button>
                  )}
                  {index !== skills.length - 1 && (
                    <button
                      type="button"
                      onClick={() => move(index, index + 1)}
                      disabled={index === skills.length - 1}
                      className="rotate-180"
                    >
                      <img src={ArrowIcon} alt="Copy" height={20} width={20} />
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => remove(index)}
                    className={`px-2 py-1 rounded-md focus:outline-none ${
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
