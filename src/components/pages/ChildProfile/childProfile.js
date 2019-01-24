import React from 'react';
import 'firebase/auth';
import './childProfile.scss';
import PropTypes from 'prop-types';
import childRequests from '../../../helpers/data/childRequests';
import authRequests from '../../../helpers/data/authRequests';
import ChildProfileForm from '../ChildProfileForm/childProfileForm';
import Child from '../Child/child';

class ChildProfile extends React.Component {
  state = {
    child: [],
    isEditing: false,
    childId: '',
  }

  displayChildren = () => {
    const uid = authRequests.getCurrentUid();
    childRequests.getAllChildren(uid)
      .then((data) => {
        this.setState({ child: data });
      }).catch(err => console.error('error getting data', err));
  }

  editing = (currentId) => {
    this.setState({ isEditing: true, childId: currentId });
  }

  updateChildren = () => {
    this.displayChildren();
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  componentDidMount() {
    this.displayChildren();
  }

  render() {
    const childBuilder = this.state.child.map((child) => {
      return (<Child
        id={child.id}
        key={child.id}
        uid={child.uid}
        image={child.image}
        firstName={child.firstName}
        lastName={child.lastName}
        email={child.email}
        age={child.age}
        grade={child.grade}
        updateChildren={this.updateChildren}
        editing={this.editing}
        changeView={this.changeView}
      />);
    });
    return (
      <div className="ChildProfile"><h4>Current Profiles</h4>
        <div className="childProfileForm">
        <ChildProfileForm
        displayChildren={this.displayChildren}
        isEditing={this.state.isEditing}
        childId={this.state.childId}
        />
        </div>
        <h1 className="d-flex justify-content-center px-3">Current Profiles</h1>
        <div className="builder">{childBuilder}</div>
      </div>
    );
  }
}

export default ChildProfile;
