import { Document, Font, Page, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { useJobs } from 'context/jobContext';
import { UserDatatype } from 'types/userTypes';

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
  const { selectedJob } = useJobs();
  const { personalDetails, experience } = dummyData;

  if (!selectedJob) {
    return <div />;
  }

  const userData: UserDatatype = JSON.parse(selectedJob.user_details);

  return (
    <div className="p-5">
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Document title="FirstCV" keywords="CV">
          <Page size="A4" style={styles.page}>
            <UserDetails personalDetails={personalDetails} jobDetails={userData.jobDetails} />
            <UserEducation education={userData.education} />
            <UserWorkExperience workExperience={experience} />
            <UserProjects projects={userData.projects} />
            <UserSkills skills={userData.skills} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default MyDocument;
