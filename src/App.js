import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { HomeLayout } from './containers';
import { DefaultLayout } from './containers';


// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Route exact path="/superadmin/login" name="Login Page" component={Login} />
          <Route exact path="/dashboard" name="Dahsboard Page" component={DefaultLayout} />
            <Route path="/superadmin" name="Home" component={DefaultLayout} />
           <Route path="/" name="Home" component={HomeLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
