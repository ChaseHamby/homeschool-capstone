import React from 'react';
import 'firebase/auth';
import './childProfile.scss';
import resourceRequests from '../../../helpers/data/resourceRequests';
import authRequests from '../../../helpers/data/authRequests';
import ChildProfileForm from '../ChildProfileForm/childProfileForm';

class ChildProfile extends React.Component {
  state = {
    resources: [],
  }

  displayResources = () => {
    const uid = authRequests.getCurrentUid();
    resourceRequests.getAllResources(uid)
      .then((data) => {
        console.log(data);
        this.setState({ resources: data });
      }).catch(err => console.error('error getting data', err));
  }

  updateResources = () => {
    this.displayResources();
  }

  componentDidMount() {
    this.displayResources();
  }

  render() {
    return (
      <div className="Resources">
        <div className="builder">{this.displayResources}</div>
        <div className="childProfileForm">
        </div>
      </div>
    );
  }
}

export default ChildProfile;
