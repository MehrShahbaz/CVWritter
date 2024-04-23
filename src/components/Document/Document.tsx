import { Document, Page, StyleSheet } from '@react-pdf/renderer';

import UserDetails from './UserDetails/UserDetails';
import UserEducation from './UserEducation/UserEducation';
import UserProjects from './UserProjects/UserProjects';
import UserSkills from './UserSkills/UserSkills';
import UserWorkExperience from './UserWorkExperience/UserWorkExperience';
import dummyData from './data';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    paddingVertical: '20px',
    paddingHorizontal: '30px',
  },
});
const MyDocument = (): JSX.Element => {
  const { userDetails, education, experience, projects, skills } = dummyData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <UserDetails userDetails={userDetails} />
        <UserEducation education={education} />
        <UserWorkExperience workExperience={experience} />
        <UserProjects projects={projects} />
        <UserSkills skills={skills} />
      </Page>
    </Document>
  );
};

export default MyDocument;
