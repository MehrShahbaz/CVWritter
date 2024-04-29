import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component';
import App from 'App';
import { JobsProvider, LoadingProvider, UserProvider } from 'context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <LoadingProvider>
    <UserProvider>
      <JobsProvider>
        <ReactNotifications />
        <App />
      </JobsProvider>
    </UserProvider>
  </LoadingProvider>
);
