import * as React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';

import { createStore } from './stores';
import { Routes } from './enums';
import {
  Dashboard,
  Exercises,
  ForgotPassword,
  IndexPage,
  Login,
  Registration,
  ResetPassword,
  Settings,
} from './pages';

import './assets/styles/main.scss';

const history = createBrowserHistory();
const store = createStore(history);

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Router history={history}>
          <Route exact path={Routes.INDEX} component={IndexPage}/>
          <Route exact path={Routes.LOGIN} component={Login}/>
          <Route exact path={Routes.REGISTRATION} component={Registration}/>
          <Route exact path={Routes.FORGOT_PASSWORD} component={ForgotPassword}/>
          <Route exact path={Routes.RESET_PASSWORD} component={ResetPassword}/>
          <Route path={Routes.DASHBOARD} component={Dashboard}/>
          <Route path={Routes.EXERCISES} component={Exercises}/>
          <Route path={Routes.SETTINGS} component={Settings}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
