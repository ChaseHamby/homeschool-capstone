import React from 'react';
import 'firebase/auth';
import './resources.scss';
import resourceRequests from '../../../helpers/data/resourceRequests';
import authRequests from '../../../helpers/data/authRequests';
import childRequests from '../../../helpers/data/childRequests';
import Resource from '../Resource/resource';
import MainNavbar from '../../MainNavbar/mainNavbar';

class Resources extends React.Component {
  state = {
    resources: [],
  }

  displayResources = () => {
    const uid = authRequests.getCurrentUid();
    resourceRequests.getAllResources(uid)
      .then((data) => {
        this.setState({ resources: data });
      }).catch(err => console.error('error getting data', err));
  }

  clickFunction = () => {
    resourceRequests.getAllResources()
      .then((data) => {
        const mathTest = data.filter(resources => resources.subject === 'Math');
        console.log(mathTest);
      }).catch(err => console.error('error getting data', err));
  }

  updateResources = () => {
    this.displayResources();
  }

  componentDidMount() {
    this.displayResources();
  }

  render() {
    const resourceBuilder = this.state.resources.map((resource) => {
      return (<Resource
        id={resource.id}
        key={resource.id}
        uid={resource.uid}
        image={resource.image}
        title={resource.title}
        description={resource.description}
        grade={resource.grade}
        brand={resource.brand}
        quantity={resource.quantity}
        subject={resource.subject}
        url={resource.url}
        updateResources={resource.updateResources}
      />);
    });
    return (
      <div className="Resources">
        <MainNavbar
        authed={this.props.authed}
        logoutClickEvent={this.props.logoutClickEvent}
        changeview={this.props.changeview}
        clickFunction={this.clickFunction}
        />
        <div className="builder">{resourceBuilder}</div>
        <div className="resourceArea">
        </div>
      </div>
    );
  }
}

export default Resources;
