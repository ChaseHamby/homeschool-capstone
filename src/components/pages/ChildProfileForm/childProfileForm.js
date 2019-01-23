import React from 'react';
import 'firebase/auth';
import './childProfileForm.scss';
import authRequests from '../../../helpers/data/authRequests';
import childRequests from '../../../helpers/data/childRequests';

class ChildProfileForm extends React.Component {
  addChildren = (e) => {
    e.preventDefault();
    const newChild = {
      firstName: document.getElementById('first_name').value,
      lastName: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      age: document.getElementById('age').value,
      grade: document.getElementById('grade').value,
      uid: authRequests.getCurrentUid(),
    };
    childRequests.postRequest(newChild)
      .then(() => {
        console.log(newChild);
        this.props.displayChildren();
      }).catch(err => console.error('err posting article', err));
  };

  render() {
    return (
        <form className="form" id="registrationForm">
            <div className="form-group d-flex justify-content-end mt-3">
                <div className="col-md-6">
                    <label htmlFor="first_name"><h5>Child's First name</h5></label>
                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-end">
                
                <div className="col-md-6">
                  <label htmlFor="last_name"><h5>Child's Last name</h5></label>
                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-end">
                
                <div className="col-md-6">
                    <label htmlFor="email"><h5>Parent Email</h5></label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-end">
                
                <div className="col-md-6">
                  <label htmlFor="age"><h5>Child's Age</h5></label>
                    <input type="text" className="form-control" name="age" id="age" placeholder="5"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-end">
                
                <div className="col-md-6">
                  <label htmlFor="grade"><h5>Child's Grade</h5></label>
                    <input type="text" className="form-control" name="grade" id="grade" placeholder="kindergarten"></input>
                </div>
            </div>
            <div className="form-group4">
                  <div className="col-md-12">
                      <button className="btn btn-lg btn-success pull-right mr-1" type="submit" onClick={this.addChildren}><i className="glyphicon glyphicon-ok-sign"></i> Save Profile</button>
                      <button className="btn btn-lg btn-primary ml-1" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                  </div>
            </div>
      </form>
    );
  }
}

export default ChildProfileForm;
