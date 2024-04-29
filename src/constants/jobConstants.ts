import { JobFormType } from 'types/jobTypes';
import { UserDatatype } from 'types/userTypes';

export const FORM_INTIAL_VALUES: JobFormType = {
  name: '',
  description: '',
  url: '',
  skills: [],
};

export const emptyUserDetailsData: UserDatatype = {
  userDetails: {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    linkedinUrl: '',
    phoneNumber: '',
    email: '',
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
