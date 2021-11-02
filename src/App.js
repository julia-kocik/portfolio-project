import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {AnimatedSwitch} from 'react-router-transition';

import  store  from './redux/store';
import './styles/global.scss';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';



const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
        >
          <Route exact path='/' component={Homepage} />
          <Route exact path='/home' component={Homepage} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
