import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import profileButton from '../../../images/createChild.png';
import continueButton from '../../../images/outside.jpg';
import HomeNavbar from '../../HomeNavbar/homeNavbar';

class Home extends React.Component {
  state = {
    authed: true,
  }

  changeView = (e) => {
    return (
    // const view = e.currentTarget.id;
    // this.props.history.push(`/${view}`);
    <Link to={'/childProfile'} />
    );
  }


  render() {
    return (
      <div className='mainHome' height='100%'>
      <HomeNavbar
      authed={this.props.authed}
      logoutClickEvent={this.props.logoutClickEvent}
      />
        <div className='homePage d-flex justify-content-around'>
          <div className="profileBtn">
          <a className='btn btn-light' id='childProfile' href={'/childProfile'}><i class="fas fa-plus-square fa-7x"></i><b>Create Child Profile</b></a>
          </div>
          <div className="continueBtn">
          <a className='btn btn-light' id='resources' href={'/resources'}><i class="fas fa-arrow-circle-right fa-7x"></i><b>Continue Without Profile</b></a>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;
