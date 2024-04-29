import { createContext, ReactNode, useContext, useState } from 'react';
import { JobType } from 'types/jobTypes';

interface JobContextType {
  jobs: JobType[] | null;
  setJob: (data: JobType[] | null) => void;
}

const JobContext = createContext<JobContextType | null>(null);

interface JobProviderProps {
  children: ReactNode;
}

export const JobsProvider = ({ children }: JobProviderProps): JSX.Element => {
  const [jobs, setJobState] = useState<JobType[] | null>(null);
  const setJob = (data: JobType[] | null): void => {
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
