import { Document, Font, Page, StyleSheet } from '@react-pdf/renderer';

import OpenSansBold from '../../fonts/Open_Sans/OpenSans-Bold.ttf';
import OpenSansItalic from '../../fonts/Open_Sans/OpenSans-Italic.ttf';

import UserDetails from './UserDetails/UserDetails';
import UserEducation from './UserEducation/UserEducation';
import UserProjects from './UserProjects/UserProjects';
import UserSkills from './UserSkills/UserSkills';
import UserWorkExperience from './UserWorkExperience/UserWorkExperience';
import dummyData from './data';

Font.register({
  family: 'OpenSans',
  src: OpenSansBold,
  fontWeight: 'bold',
});

Font.register({
  family: 'OpenSansItalic',
  src: OpenSansItalic,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});
const MyDocument = (): JSX.Element => {
  const { userDetails, education, experience, projects, skills } = dummyData;

  return (
    <Document title="FirstCV" keywords="CV">
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
