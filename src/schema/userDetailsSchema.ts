import { array, object, string } from 'yup';

export const educationFromSchema = object({
  university: string().min(3).required('University is Required'),
  program: string().min(3).required('Major is Required'),
  location: string().min(3).required('Location is Required'),
  startDate: string().min(3).required('Start Date is Required'),
  endDate: string().min(3).required('End Date is Required'),
});

export const jobDetailsFormSchema = object({
  title: string().min(3).required('Title is Required'),
  aboutMe: string().min(25).required('About me is Required'),
});

export const jobSkillsFormSchema = object({
  skills: array().of(string().min(2).required('Skill is Required')).min(1),
});
