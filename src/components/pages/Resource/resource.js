import React from 'react';
import './resource.scss';
import selectionRequests from '../../../helpers/data/selectionRequests';
import authRequests from '../../../helpers/data/authRequests';
import resourceRequests from '../../../helpers/data/resourceRequests';

class Resource extends React.Component {
  render() {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-4 rounded">
              <img src={this.props.image} alt="" className="img w-100 h-100" id="img"></img>
            </div>
            <div className="col-md-8 p-3">
              <div className="details card-block px-3">
                <h4 className="card-title" id="title">{this.props.title}</h4>
                <p className="card-text" id="description">{this.props.description}</p>
                <p className="card-text" id="subject"><b>Subject: {this.props.subject}</b></p>
                <p className="card-text" id="grade"><b>Grade: {this.props.grade}</b></p>
                <p className="card-text" id="brand"><b>Brand: {this.props.brand}</b></p>
                <p className="card-text" id={this.props.id}></p>
                <a href={this.props.url} className="thisBtn btn btn-primary" id="url">Learn More</a>
                <button className="addButton btn btn-danger" onClick={() => this.props.addBooks(this.props.id)}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;
