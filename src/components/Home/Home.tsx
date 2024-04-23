import { PDFViewer } from '@react-pdf/renderer';

import Navbar from '../_shared/Navbar/Navbar';
import MyDocument from '../Document/Document';

const Home = (): JSX.Element => (
  <div>
    <Navbar />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PDFViewer width="1000" height="1200">
        <MyDocument />
      </PDFViewer>
    </div>
  </div>
);

export default Home;
