import ReactDOM from 'react-dom/client';
import { JobsProvider } from 'context/jobContext';
import { UserProvider } from 'context/userContext';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <UserProvider>
    <JobsProvider>
      <App />
    </JobsProvider>
  </UserProvider>
);
