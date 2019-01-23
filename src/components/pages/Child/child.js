import React from 'react';
// import authRequests from '../../../helpers/data/authRequests';
import './child.scss';

class Child extends React.Component {
  render() {
    // const myUid = authRequests.getCurrentUid();
    return (
      <div className="container py-3">
      <div className="card">
        <div className="row">
            <div className="col-md-8 p-3">
              <div className="card-block px-3">
                <h4 className="card-title">{this.props.firstName} {this.props.lastName}</h4>
                <p className="card-text">{this.props.email}</p>
                <p className="card-text"><b>Subject: {this.props.age}</b></p>
                <p className="card-text"><b>Grade: {this.props.grade}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;