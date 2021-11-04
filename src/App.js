import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {AnimatedSwitch} from 'react-router-transition';

import  store  from './redux/store';
import './styles/global.scss';

//import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Project } from './components/views/Project/Project';



const App = () => (
  <Provider store={store}>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 1 }}
      atActive={{ opacity: 1 }}
    >
      <Route exact path='/' component={Homepage} />
      <Route exact path='/home' component={Homepage} />
      <Route exact path='/project/:id' component={Project} />
    </AnimatedSwitch>
  </Provider>
);

export { App };
