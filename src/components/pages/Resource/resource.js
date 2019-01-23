import React from 'react';
// import authRequests from '../../../helpers/data/authRequests';
import './resource.scss';

class Resource extends React.Component {
  render() {
    // const myUid = authRequests.getCurrentUid();
    return (
      <div class="container py-3">
      <div class="card">
        <div class="row ">
        <div class="col-md-4">
            <img src={this.props.image} class="w-100 h-100"></img>
            </div>
            <div class="col-md-8 p-3">
              <div class="card-block px-3">
                <h4 class="card-title">{this.props.title}</h4>
                <p class="card-text">{this.props.description}</p>
                <p class="card-text"><b>Subject: {this.props.subject}</b></p>
                <p class="card-text"><b>Grade: {this.props.grade}</b></p>
                <p class="card-text"><b>Brand: {this.props.brand}</b></p>
                <p class="card-text"><b>Quantity: {this.props.quantity}</b></p>
                <a href={this.props.url} class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default Resource;
