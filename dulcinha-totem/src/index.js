import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './pages/App2';
import App3 from './pages/App3';
import App4 from './pages/App4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/first_information" component={ App2 } />
        <Route exact path="/last_information" component={ App3 } />
        <Route exact path="/for_contact" component={ App4 } />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
