import { useCallback, useEffect } from 'react';
import { useJobs } from 'context/jobContext';
import { useSkill } from 'context/skillContext';
import { Field, Form, Formik } from 'formik';
import { jobCreateFrom } from 'schema/jobSchema';
import { JobCreateType, JobFormType } from 'types/jobTypes';

import InputField from 'components/shared/InputField/InputField';
import InputTextField from 'components/shared/InputTextField/InputTextField';
import Modal from 'components/shared/Modal/Modal';
import { emptyUserDetailsData, FORM_INTIAL_VALUES } from 'constants/jobConstants';
import { createJob } from 'services/jobsService';
import { getAllSkills } from 'services/skillService';

import SelectSkills from './SelectSkills/SelectSkills';

type AddJobsModalProps = {
  isOpen: boolean;
  setOpen: (show: boolean) => void;
};

const AddJobsModal = ({ isOpen, setOpen }: AddJobsModalProps): JSX.Element => {
  const { setSkills } = useSkill();
  const { appendJob } = useJobs();

  useEffect(() => {
    onGetAllSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGetAllSkills = useCallback(() => {
    getAllSkills().then((res) => setSkills(res));
  }, [setSkills]);
  const handleSubmit = useCallback(
    (values: JobFormType) => {
      const data: JobCreateType = {
        name: values.name,
        description: values.description,
        url: values.url,
        skill_ids: values.skills.map(({ id }) => id),
        user_details: JSON.stringify(emptyUserDetailsData),
      };

      createJob(data).then((res) => {
        if (res) {
          appendJob(res);
          setOpen(false);
        }
      });
    },
    [appendJob, setOpen]
  );

  return (
    <Modal show={isOpen} setShow={setOpen} heading="Add Job">
      <div className="max-w-md w-full bg-white rounded-sm">
        <div className="gap-4 flex-col">
          <div className="relative">
            <Formik onSubmit={handleSubmit} initialValues={FORM_INTIAL_VALUES} validationSchema={jobCreateFrom}>
              {({ errors, dirty: isDirty, isValid }) => (
                <Form>
                  <div style={{ height: '30rem', overflowY: 'auto' }}>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      heading="Job Name"
                      errors={errors.name}
                      component={InputField}
                    />
                    <Field
                      type="text"
                      name="url"
                      placeholder="Please add the job url"
                      heading="URL"
                      errors={errors.url}
                      component={InputField}
                    />
                    <Field
                      type="text"
                      name="description"
                      placeholder="Please add the job Description"
                      heading="Description"
                      errors={errors.description}
                      component={InputTextField}
                    />
                    <Field name="skills" component={SelectSkills} />
                    <div className="flex justify-end gap-4 mt-3">
                      <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${
                          !isDirty || !isValid ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!isDirty || !isValid}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddJobsModal;
