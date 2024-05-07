import { useCallback } from 'react';
import Select from 'react-select/creatable';
import { useSkill } from 'context/skillContext';
import { FieldProps } from 'formik';
import { SkillType } from 'types/skillTypes';

import { createSkill } from 'services/skillService';

const SelectSkills = ({ field, form }: FieldProps): JSX.Element => {
  const { skills, appendSkill } = useSkill();
  const onCreateOption = useCallback(
    (value: string) => {
      createSkill(value).then((res): void => {
        if (res) {
          appendSkill(res);
        }
      });
    },
    [appendSkill]
  );

  return (
    <div>
      <div className="block ml-2 text-sm text-gray-500 font-light z-10">Skills</div>
      <Select
        {...field}
        options={skills?.length ? skills : []}
        placeholder="Select Skill"
        isMulti
        isSearchable
        onCreateOption={onCreateOption}
        getOptionValue={(option: SkillType) => `${option.id}`}
        getOptionLabel={(option: SkillType) => `${option.name}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectSkills;
