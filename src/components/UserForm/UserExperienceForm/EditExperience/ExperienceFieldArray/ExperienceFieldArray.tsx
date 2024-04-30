import { Field, FieldArray, useFormikContext } from 'formik';
import { WorkExperienceType } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';
import { emptyExperienceData } from 'constants/jobConstants';

import ExperienceDetailsFieldArray from './ExperienceDetailsFieldArray/ExperienceDetailsFieldArray';

type ExperienceFieldArrayType = {
  experience: WorkExperienceType[];
};

const ExperienceFieldArray = (): JSX.Element => {
  const { values } = useFormikContext<ExperienceFieldArrayType>();

  return (
    <FieldArray
      name="experience"
      render={(arrayHelpers) => {
        const { remove, push } = arrayHelpers;
        const { experience } = values;
        const isDisabled = experience?.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Experience's</div>
              <button
                type="button"
                onClick={() => push(emptyExperienceData)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
              >
                +
              </button>
            </div>
            {experience?.map((_project, index) => (
              <div key={index}>
                <div className="flex items-center mt-4">
                  <div className="text-sm font-semibold mr-2 ">Experience: {index + 1}</div>
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
                <div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${index}.organization`}
                      placeholder="Organization Name"
                      heading="Organization Name"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${index}.title`}
                      placeholder="Title"
                      heading="Title"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${index}.location`}
                      placeholder="Location"
                      heading="Location"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${index}.startDate`}
                      placeholder="Start Date"
                      heading="Start Date"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`experience.${index}.endDate`}
                      placeholder="End Date"
                      heading="End Date"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <ExperienceDetailsFieldArray experienceIndex={index} />
                  </div>
                </div>
                {index !== experience.length - 1 && <div className="border-t border-gray-500 mt-3 mb-3" />}
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

export default ExperienceFieldArray;
