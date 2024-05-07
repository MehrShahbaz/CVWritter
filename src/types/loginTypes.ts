export type LoginDataType = {
  email: '';
  password: '';
};

export const FORM_INTIAL_VALUES: LoginDataType = {
  email: '',
  password: '',
};

export type LoginType = 'login' | 'sign-up';
