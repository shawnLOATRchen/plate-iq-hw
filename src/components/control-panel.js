import React, {Component} from 'react'

import PanelStatus from './panel-status'
import PanelHead from './panel-head'
import PanelContent from './panel-content'

export default class ControlPanel extends Component{

  render(){
    return(
      <div className="control-panel col-6">
        <div className="panel">
          <PanelStatus />
          <PanelHead />
          <PanelContent />
        </div>
      </div>
    )
  }
}
