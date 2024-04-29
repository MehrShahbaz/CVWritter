import { array, object, string } from 'yup';

export const jobCreateFrom = object({
  name: string().min(3).required('Name is Required'),
  description: string().min(15).required('Description is Required'),
  url: string().url().required('Please Add the URl'),
  skills: array()
    .of(
      object({
        id: string().required('Skill is Required'),
      })
    )
    .min(1, 'At least one skill is required'),
});
