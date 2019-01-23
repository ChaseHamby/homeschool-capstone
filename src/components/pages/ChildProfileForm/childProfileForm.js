import React from 'react';
import 'firebase/auth';
import './childProfileForm.scss';
import resourceRequests from '../../../helpers/data/resourceRequests';
import authRequests from '../../../helpers/data/authRequests';

class ChildProfileForm extends React.Component {
  render() {
    return (
        <form class="form" action="##" method="post" id="registrationForm">
            <div class="form-group">
                
                <div class="col-xs-6">
                    <label for="first_name"><h4>Child's First name</h4></label>
                    <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."></input>
                </div>
            </div>
            <div class="form-group">
                
                <div class="col-xs-6">
                  <label for="last_name"><h4>Child's Last name</h4></label>
                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."></input>
                </div>
            </div>
            <div class="form-group">
                
                <div class="col-xs-6">
                    <label for="email"><h4>Parent Email</h4></label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."></input>
                </div>
            </div>
            <div class="form-group">
                
                <div class="col-xs-6">
                    <label for="email"><h4>Location</h4></label>
                    <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"></input>
                </div>
            </div>
            <div class="form-group">
                  <div class="col-xs-12">
                      <button class="btn btn-lg btn-success pull-right" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                      <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                  </div>
            </div>
      </form>
      );
    }
  }

export default ChildProfileForm;
