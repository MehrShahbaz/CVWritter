import { createContext, useContext, useState } from 'react';
import { ContextProviderProps } from 'types/authTypes';
import { JobType } from 'types/jobTypes';

interface JobContextType {
  jobs: JobType[] | null;
  selectedJob: JobType | null;
  setJobs: (data: JobType[] | null) => void;
  setSelectedJob: (data: JobType) => void;
  appendJob: (data: JobType) => void;
}

const JobContext = createContext<JobContextType | null>(null);

export const JobsProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [jobs, setJobState] = useState<JobType[] | null>(null);
  const [selectedJob, setSelectedJobState] = useState<JobType | null>(null);
  const setJobs = (data: JobType[] | null): void => {
    setJobState(data);
  };
  const setSelectedJob = (data: JobType): void => {
    setSelectedJobState(data);
  };
  const appendJob = (data: JobType): void => {
    let newData: JobType[] = [];

    if (jobs) {
      newData = [data, ...jobs];
    } else {
      newData = [data];
    }

    setJobState(newData);
  };

  return (
    <JobContext.Provider value={{ jobs, setJobs, selectedJob, setSelectedJob, appendJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error('useJobs must be used within a UserProvider');
  }

  return context;
};
