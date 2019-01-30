import React from 'react';
import authRequests from '../../../helpers/data/authRequests';
import './auth.scss';
import googleButton from '../../../images/login-google.png';
import HomeNavbar from '../../HomeNavbar/homeNavbar';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.history.push('/home');
    }).catch(err => console.error('error in auth', err));
  }

  render() {
    return (
      <div className='Auth'>
      <HomeNavbar />
        <button className='authBtn btn btn-danger' onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button"/>
        </button>
      </div>
    );
  }
}

export default Auth;
