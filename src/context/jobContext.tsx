import { createContext, ReactNode, useContext, useState } from 'react';

export type JobCreateType = {
  description: string;
  name: string;
  skills: string[];
  url: string;
};

interface JobContextType {
  jobs: JobCreateType[] | null;
  setJob: (data: JobCreateType[] | null) => void;
}

const JobContext = createContext<JobContextType | null>(null);

interface JobProviderProps {
  children: ReactNode;
}

export const JobsProvider = ({ children }: JobProviderProps): JSX.Element => {
  const [jobs, setJobState] = useState<JobCreateType[] | null>(null);
  const setJob = (data: JobCreateType[] | null): void => {
    setJobState(data);
  };

  return <JobContext.Provider value={{ jobs, setJob }}>{children}</JobContext.Provider>;
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error('useJobs must be used within a UserProvider');
  }

  return context;
};
