import { Field, FieldArray, useFormikContext } from 'formik';
import { ProjectsType } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';

type ProjectFieldArrayType = {
  projects: ProjectsType[];
};

type ProjectDetailsFieldArrayProps = {
  projectIndex: number;
};

const ProjectDetailsFieldArray = ({ projectIndex }: ProjectDetailsFieldArrayProps): JSX.Element => {
  const { values } = useFormikContext<ProjectFieldArrayType>();

  return (
    <FieldArray
      name={`projects.${projectIndex}.details`}
      render={(arrayHelpers) => {
        const { remove, push } = arrayHelpers;
        const { projects } = values;
        const { details } = projects[projectIndex];
        const isDisabled = details?.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Details</div>
              <button
                type="button"
                onClick={() => push('')}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
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
                      name={`projects.${projectIndex}.details.${index}`}
                      placeholder="Detail"
                      heading={`Detail: ${index + 1}`}
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

export default ProjectDetailsFieldArray;
