import { Field, FieldArray, useFormikContext } from 'formik';
import { ProjectsType } from 'types/userTypes';

import InputField from 'components/shared/InputField/InputField';
import { emptyProjectsData } from 'constants/jobConstants';

import ProjectDetailsFieldArray from './ProjectDetailsFieldArray/ProjectDetailsFieldArray';

type ProjectFieldArrayType = {
  projects: ProjectsType[];
};

const ProjectFieldArray = (): JSX.Element => {
  const { values } = useFormikContext<ProjectFieldArrayType>();

  return (
    <FieldArray
      name="projects"
      render={(arrayHelpers) => {
        const { remove, push } = arrayHelpers;
        const { projects } = values;
        const isDisabled = projects?.length === 1;

        return (
          <div>
            <div className="flex items-center">
              <div className="text-lg font-semibold mr-2">Projects</div>
              <button
                type="button"
                onClick={() => push(emptyProjectsData)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
              >
                +
              </button>
            </div>
            {projects?.map((_project, index) => (
              <div key={index}>
                <div className="flex items-center mt-4">
                  <div className="text-sm font-semibold mr-2 ">Project: {index + 1}</div>
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
                      name={`projects.${index}.name`}
                      placeholder="Project's Name"
                      heading="Name"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <Field
                      type="text"
                      name={`projects.${index}.title`}
                      placeholder="Project's Title"
                      heading="Title"
                      component={InputField}
                    />
                  </div>
                  <div className="flex-grow mr-2">
                    <ProjectDetailsFieldArray projectIndex={index} />
                  </div>
                </div>
                {index !== projects.length - 1 && <div className="border-t border-gray-500 mt-3 mb-3" />}
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

export default ProjectFieldArray;
