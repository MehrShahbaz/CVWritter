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
    paddingHorizontal: 30,
  },
});

type MyDocumentProps = {
  data?: UserDatatype;
};

const MyDocument = ({ data }: MyDocumentProps): JSX.Element => {
  const { selectedJob } = useJobs();
  const userData: UserDatatype = data || JSON.parse(selectedJob?.user_details ? selectedJob?.user_details : '');

  return (
    <div className="p-5">
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Document title={`${userData.personalDetails.firstName}_CV`} keywords="CV">
          <Page size="A4" style={styles.page}>
            <UserDetails personalDetails={userData.personalDetails} jobDetails={userData.jobDetails} />
            <UserEducation education={userData.education} />
            <UserWorkExperience workExperience={userData.experience} />
            <UserProjects projects={userData.projects} />
            <UserSkills skills={userData.skills} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default MyDocument;
