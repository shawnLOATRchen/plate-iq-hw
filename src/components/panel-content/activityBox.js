import React, {Component} from 'react'

export default class ActivityBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className="activity-box row">
        <div className="col-3">{item.date}</div>
        <div className="col-6 d-flex">
          <div className="activity-status d-flex flex-column align-items-center">
            <div className="status-top"></div>
            <div className="status-circle"></div>
            <div className="status-buttom"></div>
          </div>
          <div className="content">{item.title}</div>
        </div>
        <div className="col-3 text-right">{item.resolved}</div>
      </div>
    )
  }
}
