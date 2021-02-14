import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { createFakeApi } from './services/api';

createFakeApi();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
