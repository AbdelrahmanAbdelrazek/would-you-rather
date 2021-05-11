import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import middleware from './middleware';
import { BrowserRouter as Router} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(rootReducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <Router>
    <React.Fragment>
      <CssBaseline />
      <App />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);

