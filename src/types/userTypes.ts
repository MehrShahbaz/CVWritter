export type UserPersonalDetailsType = {
  firstName: string;
  lastName: string;
  address: string;
  linkedinUrl: string;
  phoneNumber: string;
  email: string;
};

export type UserJobDetailsType = {
  title: string;
  aboutMe: string;
};

export type EducationType = {
  university: string;
  program: string;
  location: string;
  startDate?: string;
  endDate: string;
};

export type WorkExperienceType = {
  organization: string;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  details: string[];
};

export type ProjectsType = {
  name: string;
  title?: string;
  details: string[];
};

export type UserDatatype = {
  personalDetails: UserPersonalDetailsType;
  jobDetails: UserJobDetailsType;
  education: EducationType;
  experience: WorkExperienceType[];
  projects: ProjectsType[];
  skills: string[];
};

export type UserCreateType = {
  uid: string | null;
  email: string | null;
  name: string | null;
  details: string;
};

export type UserUpdateType = {
  name?: string | null;
  details?: string;
};

export type UserComponentType = {
  handleUpdate: (data: UserDatatype) => void;
  userData: UserDatatype;
};

export type DetailsComponentProps = {
  userData: UserDatatype;
};

export type DetailsEditProps = {
  handleUpdate: (data: UserDatatype) => void;
  userData: UserDatatype;
  setShowFalse: () => void;
};

export type UserType = {
  id: string;
  uid: string;
  email: string;
  name: string;
  details: string;
};
