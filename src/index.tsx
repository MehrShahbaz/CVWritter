import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component';
import App from 'App';
import { JobsProvider, LoadingProvider, UserProvider } from 'context';
import { SkillProvider } from 'context/skillContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <LoadingProvider>
    <UserProvider>
      <JobsProvider>
        <SkillProvider>
          <ReactNotifications />
          <App />
        </SkillProvider>
      </JobsProvider>
    </UserProvider>
  </LoadingProvider>
);
