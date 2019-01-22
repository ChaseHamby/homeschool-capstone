import React from 'react';
import './home.scss';
import profileButton from '../../../images/createChild.png';
import continueButton from '../../../images/continue.png';

class Home extends React.Component {
  render() {
    return (
      <div className='Home mx-auto'>
        <div className='homePage'>
          <div className="profileBtn">
          <button className='btn btn-light'>
            <img src={profileButton} alt="create child profile button"/>
          </button>
          </div>
          <div className="continueBtn">
          <button className='btn btn-light'>
            <img src={continueButton} alt="continue to site button"/>
          </button>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;
