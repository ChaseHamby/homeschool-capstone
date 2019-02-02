import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/auth';
import Home from '../components/pages/Home/home';
import ChildProfile from '../components/pages/ChildProfile/childProfile';
import Resources from '../components/pages/Resources/resources';
import authRequests from '../helpers/data/authRequests';
import './App.scss';
import Test from '../components/pages/test';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route { ...rest } render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route { ...rest } render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { pendingUser } = this.state;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };
    
    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <div className="appContainer">
              <Switch>
                <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
                <PrivateRoute path='/home' component={() => <Home logoutClickEvent={logoutClickEvent} />} authed={this.state.authed} />
                <PrivateRoute path='/childProfile' component={() => <ChildProfile logoutClickEvent={logoutClickEvent} />} authed={this.state.authed} />
                <PrivateRoute path='/resources' component={() => <Resources logoutClickEvent={logoutClickEvent} />} authed={this.state.authed} />
                <PublicRoute path='/auth' component={Auth} authed={this.state.authed} test={this.state.test} />
                <PublicRoute path='/test' component={Test} authed={this.state.authed} test={this.state.test} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
