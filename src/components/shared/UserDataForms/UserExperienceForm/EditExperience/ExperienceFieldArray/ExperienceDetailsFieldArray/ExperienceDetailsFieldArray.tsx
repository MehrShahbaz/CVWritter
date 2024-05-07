import { Field, FieldArray, useFormikContext } from 'formik';
import { WorkExperienceType } from 'types/userTypes';

import InputTextField from 'components/shared/InputTextField/InputTextField';

type ProjectFieldArrayType = {
  experience: WorkExperienceType[];
};

type ExperienceDetailsFieldArrayProps = {
  experienceIndex: number;
};

const ExperienceDetailsFieldArray = ({ experienceIndex }: ExperienceDetailsFieldArrayProps): JSX.Element => {
  const { values } = useFormikContext<ProjectFieldArrayType>();

  return (
    <FieldArray
      name={`experience.${experienceIndex}.details`}
      render={(arrayHelpers) => {
        const { remove, push } = arrayHelpers;
        const { experience } = values;
        const { details } = experience[experienceIndex];
        const isDisabled = details?.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Details</div>
              <button
                type="button"
                onClick={() => push('')}
                className="bg-green-500 text-white px-2 rounded-md hover:bg-green-600 focus:outline-none"
              >
                +
              </button>
            </div>
            {details?.map((_skill, index) => (
              <div>
                <div key={index} className="flex justify-between items-center">
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${experienceIndex}.details.${index}`}
                      placeholder="Detail"
                      heading={`Detail: ${index + 1}`}
                      component={InputTextField}
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

export default ExperienceDetailsFieldArray;
