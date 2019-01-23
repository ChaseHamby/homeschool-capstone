import React from 'react';
import 'firebase/auth';
import './resources.scss';
import resourceRequests from '../../../helpers/data/resourceRequests';
import authRequests from '../../../helpers/data/authRequests';
import Resource from '../Resource/resource';

class Resources extends React.Component {
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
        <div className="builder">{resourceBuilder}</div>
        <div className="resourceArea">
        </div>
      </div>
    );
  }
}

export default Resources;
