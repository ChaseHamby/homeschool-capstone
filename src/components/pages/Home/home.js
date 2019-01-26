import React from 'react';
import './home.scss';
import profileButton from '../../../images/createChild.png';
import continueButton from '../../../images/outside.jpg';
import HomeNavbar from '../../HomeNavbar/homeNavbar';

class Home extends React.Component {
  state = {
    authed: true,
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
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
          <button className='btn btn-light' id='childProfile' onClick={this.changeView}>
            <img src="https://firebasestorage.googleapis.com/v0/b/homeschool-capstone.appspot.com/o/LEOSAUL.jpg?alt=media&token=ac5f002f-383d-430c-a15c-f8173ef2097c" alt="create child profile button"/>
          </button>
          </div>
          <div className="continueBtn">
          <button className='btn btn-light' id='resources' onClick={this.changeView}>
            <img src={continueButton} alt="continue to site button"/>
          </button>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;
