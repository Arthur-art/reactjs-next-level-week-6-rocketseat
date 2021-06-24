import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';

import "./services/firebase"

ReactDOM.render(
  <React.StrictMode>
   <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


