import React, {Component} from 'react'

export default class ActivityBox extends Component{
  getStatus(){
    if (this.props.item.approved) return " blue";
    else if (this.props.item.flagged) return " red";
    else return ""
  }

  getRightBtn(){
    if (this.props.item.flagged){
      if (this.props.item.resolved) {
        return (
          <button className="btn resolved" type="button">
            Resolved
          </button>
        )
      } else {
        return (
          <button className="btn to-resolve" type="button">
            Resolve Flag
          </button>
        )
      }
    }
  }
  render(){
    const item = this.props.item;
    return(
      <div className="activity-box row">
        <div className="col-3 d-flex flex-column">
          <div className="date">{item.date}</div>
          <div className="time">{item.time}</div>
        </div>
        <div className="col-6 d-flex">
          <div className="activity-status align-items-center">
            <div className="status-top"></div>
            <div className={"status-circle" + this.getStatus()}></div>
            <div className="status-buttom"></div>
          </div>
          <div className="content d-flex flex-column justify-content-center">
            <div className={"title" + this.getStatus()}>{item.title}</div>
            {item.discription.length > 0 && <div className="discription">{item.discription}</div>}
          </div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center">{this.getRightBtn()}</div>
      </div>
    )
  }
}
