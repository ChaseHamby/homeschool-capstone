import React from 'react';
import 'firebase/auth';
import './resources.scss';
import swal from 'sweetalert';
import resourceRequests from '../../../helpers/data/resourceRequests';
import authRequests from '../../../helpers/data/authRequests';
import Resource from '../Resource/resource';
import MainNavbar from '../../MainNavbar/mainNavbar';
import selectionRequests from '../../../helpers/data/selectionRequests';

class Resources extends React.Component {
  state = {
    resources: [],
    selections: [],
  }

  displayResources = () => {
    const uid = authRequests.getCurrentUid();
    resourceRequests.getAllResources(uid)
      .then((data) => {
        this.setState({ resources: data });
      }).catch(err => console.error('error getting data', err));
  }

  subjectFilter = (event) => {
    const selectedFilter = event.target.value;
    resourceRequests.getAllResources()
      .then((data) => {
        const filteredData = data.filter(resources => resources.subject === selectedFilter);
        this.setState({ resources: filteredData });
      }).catch(err => console.error('error getting data', err));
  }

  gradeFilter = (event) => {
    const selectedFilter = event.target.value;
    resourceRequests.getAllResources()
      .then((data) => {
        const filteredData = data.filter(resources => resources.grade === selectedFilter);
        this.setState({ resources: filteredData });
      }).catch(err => console.error('error getting data', err));
  }

  brandFilter = (event) => {
    const selectedFilter = event.target.value;
    resourceRequests.getAllResources()
      .then((data) => {
        const filteredData = data.filter(resources => resources.brand === selectedFilter);
        this.setState({ resources: filteredData });
      }).catch(err => console.error('error getting data', err));
  }

  updateResources = () => {
    this.displayResources();
  }

  addBooks = (id) => {
    const uid = authRequests.getCurrentUid();
    console.log(uid, id);
    resourceRequests.getSingleResource(id, uid)
      .then((response) => {
        console.log(response.data);
        selectionRequests.postRequest({
          url: response.data.url,
          title: response.data.title,
          subject: response.data.subject,
          image: response.data.image,
          quantity: response.data.quantity,
          grade: response.data.grade,
          description: response.data.description,
          brand: response.data.brand,
        });
        swal('You added a book to your profile!', '', 'success');
      })
      .catch(err => console.error('error getting data', err));
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
        addBooks={this.addBooks}
      />);
    });
    return (
      <div className="Resources">
        <MainNavbar
        authed={this.props.authed}
        logoutClickEvent={this.props.logoutClickEvent}
        changeview={this.props.changeview}
        subjectFilter={this.subjectFilter}
        gradeFilter={this.gradeFilter}
        brandFilter={this.brandFilter}
        />
        <div className="builder">{resourceBuilder}</div>
        <div className="resourceArea">
        </div>
      </div>
    );
  }
}

export default Resources;
