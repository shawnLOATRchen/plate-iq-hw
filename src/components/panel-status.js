import React, {Component} from 'react'


export default class PanelStatus extends Component{

  render(){
    return(
      <div className="panel-status d-flex">
        <div className="status-left">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
          <span> 12/33 </span>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
          <span> NEEDS REVISION </span>
        </div>
        <div className="status-right">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          <span> 4 item(s) require account mapping </span>
        </div>

      </div>
    )
  }
}
