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
          alert('You have successfully deleted your profile');
        })
        .catch(err => console.error('error with single delete', err));
    };

    const editChild = (e) => {
      e.preventDefault();
      this.props.editing(this.props.id);
      document.getElementById('first_name').value = this.props.firstName;
      document.getElementById('last_name').value = this.props.lastName;
      document.getElementById('email').value = this.props.email;
      document.getElementById('age').value = this.props.age;
      document.getElementById('grade').value = this.props.grade;
      window.scrollTo(0, 125);
    };

    const showEditButton = () => {
      if (this.props.uid === myUid) {
        return (
          <div>
            <button className="editButton" onClick={editChild}><i className="fas fa-marker fa-2x"></i></button>
          </div>
        );
      }
      return null;
    };

    const showDeleteButton = () => {
      if (this.props.uid === myUid) {
        return (
          <div>
          <button className="trash" onClick={deleteChild}><i className="far fa-trash-alt fa-2x"></i></button>
        </div>
        );
      }
      return null;
    };

    return (
      <div className="container py-3">
      <div className="card">
        <div className="testing d-flex justify-content-center">
            <div className="col-md-8 p-3">
              <div className="card-block px-3">
                <h2 className="card-title">{this.props.firstName} {this.props.lastName}</h2>
                <p className="card-text">{this.props.email}</p>
                <p className="card-text"><b>Age: {this.props.age}</b></p>
                <p className="card-text"><b>Grade: {this.props.grade}</b></p>
                <div className="datButtonz d-flex justify-content-around row datButtonz">
                <div className="d-flex justify-content-center">{showEditButton()}</div>
                <div className="d-flex justify-content-center">{showDeleteButton()}</div>
                <a className="d-flex justify-content-center select" id='resources' href={'/resources'}><i className="fas fa-check-circle fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
