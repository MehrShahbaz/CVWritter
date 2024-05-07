import { array, object, string } from 'yup';

const sharedSchema = {
  location: string().min(3).required('Location is Required'),
  startDate: string().min(3).required('Start Date is Required'),
  endDate: string().min(3).required('End Date is Required'),
  title: string().min(2).required('Title is Required'),
  details: array().of(string().min(2)),
};

export const educationFromSchema = object({
  university: string().min(3).required('University is Required'),
  program: string().min(3).required('Major is Required'),
  location: sharedSchema.location,
  startDate: sharedSchema.startDate,
  endDate: sharedSchema.endDate,
});

export const personalDetailsSchema = object({
  firstName: string().min(3).required('First Name is Required'),
  lastName: string().min(3).required('Last Name is Required'),
  address: string().min(3).required('Address is Required'),
  linkedinUrl: string().url().required('Address is Required'),
  phoneNumber: string().min(10).required('Address is Required'),
  email: string().email().required('Address is Required'),
});

export const jobDetailsFormSchema = object({
  title: sharedSchema.title,
  aboutMe: string().min(25).required('About me is Required'),
});

export const jobSkillsFormSchema = object({
  skills: array().of(string().min(2).required('Skill is Required')).min(1),
});

export const jobProjectsSchema = object({
  projects: array().of(
    object({
      name: string().min(3).required('Project name is Required'),
      title: sharedSchema.title,
      details: sharedSchema.details,
    })
  ),
});

export const jobExperienceSchema = object({
  experience: array().of(
    object({
      organization: string().min(3).required('Organization is Required'),
      title: sharedSchema.title,
      location: sharedSchema.location,
      startDate: sharedSchema.startDate,
      endDate: sharedSchema.endDate,
      details: sharedSchema.details,
    })
  ),
});
