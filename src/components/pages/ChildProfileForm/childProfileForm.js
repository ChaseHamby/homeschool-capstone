import React from 'react';
import swal from 'sweetalert';
// import { storage } from '../../../../node_modules/firebase';
// import firebase from '../../../../node_modules/firebase';
import 'firebase/auth';
import './childProfileForm.scss';
import authRequests from '../../../helpers/data/authRequests';
import childRequests from '../../../helpers/data/childRequests';

// const defaultChild = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   age: 0,
//   grade: '',
// };

class ChildProfileForm extends React.Component {
  state = {
    childId: '',
    // image: null,
    // url: '',
    // newChild: defaultChild,
  }

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
    if (this.props.isEditing) {
      childRequests.updateChild(this.props.childId, newChild)
        .then(() => {
          swal('You edited your profile!', '', 'success');
          window.scroll(0, 800);
          this.props.displayChildren();
        })
        .catch(err => console.error('error in getting children', err));
    } else {
      childRequests.postRequest(newChild)
        .then(() => {
          swal('You successfully added a profile', '', 'success');
          window.scroll(0, 800);
          this.props.displayChildren();
        })
        .catch(err => console.error('err posting article', err));
    }
  };

  // Commented out code below being used for image upload to Firebase storage

  // handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     this.setState({ image });
  //   }
  // }

  // handleUpload = () => {
  //   const { image } = this.state;
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on('state_changed',
  //     (snapshot) => {
  //     // progrss function ....
  //       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //       this.setState({ progress });
  //     },
  //     (error) => {
  //     // error function ....
  //       console.log(error);
  //     },
  //     () => {
  //     // complete function ....
  //       storage.ref('images').child(image.name).getDownloadURL()
  //         .then((url) => {
  //           console.log(url);
  //           this.setState({ url });
  //         });
  //     });
  // }


  formTitle = () => {
    if (this.props.isEditing) {
      return 'Edit Profile';
    }
    return 'Create Profile';
  }

  render() {
    return (
        <form className="form d-flex justify-content-center" id="registrationForm">
            <div className="formies"><h2>{this.formTitle()}</h2>
            <div className="form-group d-flex justify-content-center mt-3">
                <div className="col-md-6">
                    <label htmlFor="first_name"><h5>Child's First name</h5></label>
                    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center">

                <div className="col-md-6">
                  <label htmlFor="last_name"><h5>Child's Last name</h5></label>
                    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center">

                <div className="col-md-6">
                    <label htmlFor="email"><h5>Parent Email</h5></label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center">

                <div className="col-md-6">
                  <label htmlFor="age"><h5>Child's Age</h5></label>
                    <input type="text" className="form-control" name="age" id="age" placeholder="5"></input>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center">

                <div className="col-md-6">
                  <label htmlFor="grade"><h5>Child's Grade</h5></label>
                    <input type="text" className="form-control" name="grade" id="grade" placeholder="Kindergarten"></input>
                </div>
            </div>

            {/* Commented out for now - code below used for firebase storage upload */}

            {/* <div id="filesubmit" className="form-group d-flex justify-content-center">
              <input type="file" class="file-select" onChange={this.handleChange} accept="image/*"/>
              <button class="file-submit" onClick={this.handleUpload}>SUBMIT</button>
            </div> */}

            <div className="form-group-buttons">
                  <div className="col-md-12">
                      <button className="btn btn-lg btn-success pull-right mr-1" type="submit" onClick={this.addChildren}><i className="glyphicon glyphicon-ok-sign"></i> Save Profile</button>
                      <button className="btn btn-lg btn-primary ml-1" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                  </div>
                </div>
            </div>
      </form>
    );
  }
}

export default ChildProfileForm;
