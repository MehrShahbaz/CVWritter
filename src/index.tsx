import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
