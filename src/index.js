import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import Root from './Root';
import store from './store';
ReactDOM.render(
      <Root>
        <App />
      </Root>,
  document.getElementById('root')
);
