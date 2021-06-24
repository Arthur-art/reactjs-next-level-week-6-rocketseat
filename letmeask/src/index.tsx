import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'

ReactDOM.render(
  <React.StrictMode>
   <App text={"ReactJs"}/>
   <App text={"TypeScript"}/>
   <App text={"SASS"}/>
   <App text={"NodeJs"}/>
   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


