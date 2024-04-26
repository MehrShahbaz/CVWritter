// import { PDFViewer } from '@react-pdf/renderer';

import Navbar from '../shared/Navbar/Navbar';
import Organization from '../UserJobs/UserJobs';
// import Document from '../Document/Document';
// import UserForm from '../UserForm/UserForm';

// const Home = (): JSX.Element => (
//   <div>
//     <Navbar />
//     <div style={{ display: 'flex', flexDirection: 'column', padding: 30 }}>
//       <div style={{ flex: 1 }}>
//         <UserForm />
//       </div>
//       <div style={{ flex: 1, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <PDFViewer width="1000" height="1200">
//           <Document />
//         </PDFViewer>
//       </div>
//     </div>
//   </div>
// );

const Home = (): JSX.Element => (
  <div>
    <Navbar />
    <Organization />
  </div>
);

export default Home;
