import { useMemo } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { chunkArray } from '../../../helpers/appHelper';
import Heading from '../Heading/Heading';

const styles = StyleSheet.create({
  skillWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    marginBottom: '5px',
  },
  skillContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    alignItems: 'center',
    flex: '1',
  },
  skill: {
    marginLeft: '5px',
    fontSize: '10px',
  },
});

type UserSkillsProps = {
  skills: string[];
};

const UserSkills = ({ skills }: UserSkillsProps): JSX.Element => {
  const separatedSkills = useMemo(() => chunkArray(skills, 6), [skills]);

  return (
    <>
      <Heading heading="skills" />
      <View>
        {separatedSkills.map((data) => (
          <View style={styles.skillWrapper}>
            {data.map((skill) => (
              <View style={styles.skillContainer}>
                <Text style={styles.skill}>{skill}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

export default UserSkills;
