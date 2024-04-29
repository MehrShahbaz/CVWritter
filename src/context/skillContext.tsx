import { createContext, useContext, useState } from 'react';
import { ContextProviderProps } from 'types/authTypes';
import { SkillType } from 'types/skillTypes';

interface SkillContextType {
  skills: SkillType[] | null;
  setSkills: (data: SkillType[] | null) => void;
  appendSkill: (data: SkillType) => void;
}

const SkillContext = createContext<SkillContextType | null>(null);

export const SkillProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [skills, setSkillState] = useState<SkillType[] | null>(null);
  const setSkills = (data: SkillType[] | null): void => {
    setSkillState(data);
  };
  const appendSkill = (data: SkillType): void => {
    let newData: SkillType[] = [];

    if (skills) {
      newData = [...skills, data];
    } else {
      newData = [data];
    }

    setSkillState(newData);
  };

  return <SkillContext.Provider value={{ skills, setSkills, appendSkill }}>{children}</SkillContext.Provider>;
};

export const useSkill = (): SkillContextType => {
  const context = useContext(SkillContext);

  if (!context) {
    throw new Error('useSkill must be used within a SkillProvider');
  }

  return context;
};
