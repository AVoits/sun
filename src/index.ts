import * as React from 'react';
import * as ReactDOM from 'react-dom';


import 'normalize.css';
import 'reset-css';


import App from "./components/App";


ReactDOM.render(
  React.createElement(App, {}),
  document.getElementById('root')
);