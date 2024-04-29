import { object, string } from 'yup';

export const educationFromSchema = object({
  university: string().min(3).required('University is Required'),
  program: string().min(3).required('Major is Required'),
  location: string().min(3).required('Location is Required'),
  startDate: string().min(3).required('Start Date is Required'),
  endDate: string().min(3).required('End Date is Required'),
});
