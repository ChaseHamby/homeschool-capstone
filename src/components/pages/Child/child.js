import React from 'react';
import authRequests from '../../../helpers/data/authRequests';
import childRequests from '../../../helpers/data/childRequests';
import './child.scss';

class Child extends React.Component {
  render() {
    const myUid = authRequests.getCurrentUid();
    const deleteChild = (e) => {
      childRequests.deleteChild(this.props.id)
        .then(() => {
          this.props.updateChildren();
        })
        .catch(err => console.error('error with single delete', err));
    };

    const showDeleteButton = () => {
      if (this.props.uid === myUid) {
        return (
          <div>
          <button className="trash" onClick={deleteChild}><i className="far fa-trash-alt fa-2x"></i></button>
        </div>
        );
      }
    };

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
                <div className="d-flex justify-content-center">{showDeleteButton()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;