import { PDFViewer } from '@react-pdf/renderer';

import Navbar from '../_shared/Navbar/Navbar';
import Document from '../Document/Document';
import UserForm from '../UserForm/UserForm';

const Home = (): JSX.Element => (
  <div>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', padding: 30 }}>
      <div style={{ flex: 1 }}>
        <UserForm />
      </div>
      <div style={{ flex: 1, marginLeft: 10 }}>
        <PDFViewer width="1000" height="1200">
          <Document />
        </PDFViewer>
      </div>
    </div>
  </div>
);

export default Home;
