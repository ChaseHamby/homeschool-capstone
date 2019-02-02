import React from 'react';
import './home.scss';
import HomeNavbar from '../../HomeNavbar/homeNavbar';

class Home extends React.Component {
  // state = {
  //   authed: true,
  // }

  render() {
    return (
      <div className='mainHome' height='100%'>
      <HomeNavbar
      authed={this.props.authed}
      logoutClickEvent={this.props.logoutClickEvent}
      />
        <div className='homePage d-flex justify-content-around'>
          <div className="profileBtn">
          <a className='btn btn-faded' id='childProfile' href={'/childProfile'}><i className="fas fa-plus-square fa-7x"></i><b></b></a>
          <div><b><h2 className="buttonText">Create Child Profile</h2></b></div>
          </div>
          <div className="continueBtn">
          <a className='btn btn-faded' id='resources' href={'/resources'}><i className="fas fa-arrow-circle-right fa-7x"></i></a>
          <div><b><h2 className="buttonText2"> Continue Without Profile </h2></b></div>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;
