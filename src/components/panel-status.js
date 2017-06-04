import React, {Component} from 'react'


export default class PanelStatus extends Component{
  statusLeft(){
    switch (this.props.progress) {
      case "explorted":
        return "APPROVED"
      case "paid":
        return "PENDING EXPORT"
      case "direct":
      default:
        return "NEEDS REVISION"
    }
  }
  statusRight(){
    switch (this.props.progress) {
      case "explorted":
        return [
          <i className="fa fa-check" aria-hidden="true" key="right1"></i>,
          <span key="right2">This invoice has been approved</span>
        ]
      case "paid":
        return [
          <i className="fa fa-arrow-right" aria-hidden="true" key="right1"></i>,
          <span key="right2">This invoice is pending export</span>
        ]
      case "direct":
      default:
        return [
          <i className="fa fa-exclamation-triangle" aria-hidden="true" key="right1"></i>,
          <span key="right2">4 item(s) require account mapping</span>
        ]
    }
  }
  render(){
    return(
      <div className={"panel-status d-flex " + (this.props.progress === "direct" ? "red":"green")}>
        <div className="status-left">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
          <span> 12/33 </span>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
          <span className="progress-name">{this.statusLeft()}</span>
        </div>
        <div className="status-right">
          {this.statusRight()}
        </div>

      </div>
    )
  }
}
