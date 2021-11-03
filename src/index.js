import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(<Router history={customHistory}>
  <Route
    component={({ history }) => {
      window.appHistory = history;
      return <App />;
    }}
  />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
