/* eslint-disable @typescript-eslint/no-explicit-any */
import { SkillType } from 'types/skillTypes';

import { errorNotification, showNotification } from 'helpers/appHelper';

import { skillActions } from './actions';

export const getAllSkills = async (): Promise<SkillType[]> => {
  try {
    const response = await skillActions.getAllSkills();

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return [];
  }
};

export const createSkill = async (value: string): Promise<SkillType | null> => {
  try {
    const response = await skillActions.createSkill(value).then((res) => {
      showNotification({ title: 'Skill Created', type: 'success', message: `${value} Created successfully` });

      return res;
    });

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return null;
  }
};
