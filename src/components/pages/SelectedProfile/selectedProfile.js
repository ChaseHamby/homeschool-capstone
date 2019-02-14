import React from 'react';
import 'firebase/auth';
import './selectedProfile.scss';
import childRequests from '../../../helpers/data/childRequests';
import authRequests from '../../../helpers/data/authRequests';
import selectionRequests from '../../../helpers/data/selectionRequests';
import HomeNavbar from '../../HomeNavbar/homeNavbar';
import Selection from '../Selection/selection';

class SelectedProfile extends React.Component {
  state = {
    child: [],
    childId: '',
    authed: true,
    resources: [],
    selections: [],
  }

  displaySelections = () => {
    const uid = authRequests.getCurrentUid();
    selectionRequests.getAllSelections(uid)
      .then((data) => {
        this.setState({ selections: data });
      }).catch(err => console.error('error getting data', err));
  }

  updateSelections = () => {
    this.displaySelections();
  }

  componentDidMount() {
    this.displaySelections();
  }

  // changeView = (e) => {
  //   const view = e.currentTarget.id;
  //   this.props.history.push(`/${view}`);
  // }

  render() {
    const selectionBuilder = this.state.selections.map((selection) => {
      return (<Selection
        id={selection.id}
        key={selection.id}
        uid={selection.uid}
        image={selection.image}
        title={selection.title}
        description={selection.description}
        grade={selection.grade}
        brand={selection.brand}
        quantity={selection.quantity}
        subject={selection.subject}
        url={selection.url}
        updateSelections={this.updateSelections}
      />);
    });
    return (
      <div className="SelectedProfile">
        <HomeNavbar
        authed={this.props.authed}
        logoutClickEvent={this.props.logoutClickEvent}
        />
        <div>
          <a className="backToProfiles btn btn-warning" id="backProfile" href={'/childProfile'}>Back to Profiles</a>
        </div>
        <div>
        {selectionBuilder}
        </div>
      </div>
    );
  }
}

export default SelectedProfile;
