import React from 'react';
import './resource.scss';

class Resource extends React.Component {
  render() {
    return (
      <div className="container py-3">
      <div className="card">
        <div className="row">
        <div className="col-md-4 rounded">
            <img src={this.props.image} alt="" className="img w-100 h-100"></img>
            </div>
            <div className="col-md-8 p-3">
              <div className="details card-block px-3">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.description}</p>
                <p className="card-text"><b>Subject: {this.props.subject}</b></p>
                <p className="card-text"><b>Grade: {this.props.grade}</b></p>
                <p className="card-text"><b>Brand: {this.props.brand}</b></p>
                <a href={this.props.url} className="thisBtn btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default Resource;
