import React from 'react';
import 'firebase/auth';
import './childProfile.scss';
import childRequests from '../../../helpers/data/childRequests';
import authRequests from '../../../helpers/data/authRequests';
import ChildProfileForm from '../ChildProfileForm/childProfileForm';
import Child from '../Child/child';
import HomeNavbar from '../../HomeNavbar/homeNavbar';

class ChildProfile extends React.Component {
  state = {
    child: [],
    isEditing: false,
    childId: '',
    authed: true,
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
    const theState = { ...this.state };
    theState.authed = this.props.authed;
    this.setState({ theState });
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
      <div className="ChildProfile">
        <HomeNavbar
        authed={this.props.authed}
        logoutClickEvent={this.props.logoutClickEvent}
        />
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
