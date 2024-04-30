import { JobFormType } from 'types/jobTypes';
import { ProjectsType, UserDatatype, WorkExperienceType } from 'types/userTypes';

export const FORM_INTIAL_VALUES: JobFormType = {
  name: '',
  description: '',
  url: '',
  skills: [],
};

export const emptyUserDetailsData: UserDatatype = {
  personalDetails: {
    firstName: '',
    lastName: '',
    address: '',
    linkedinUrl: '',
    phoneNumber: '',
    email: '',
  },
  jobDetails: {
    title: '',
    aboutMe: '',
  },
  education: {
    university: '',
    program: '',
    location: '',
    startDate: '',
    endDate: '',
  },
  experience: [
    {
      organization: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      details: [''],
    },
  ],
  projects: [
    {
      name: '',
      title: '',
      details: [''],
    },
  ],
  skills: [''],
};

export const emptyProjectsData: ProjectsType = {
  name: '',
  title: '',
  details: [''],
};

export const emptyExperienceData: WorkExperienceType = {
  organization: '',
  title: '',
  location: '',
  startDate: '',
  endDate: '',
  details: [''],
};
