import React, {Component} from 'react'

import PanelStatus from './panel-status'
import PanelHead from './panel-head'
import PanelContent from './panel-content'

export default class ControlPanel extends Component{
  constructor(){
    super();
    this.state = { progress: "direct", tab: "line-items"  }
  }
  render(){
    return(
      <div className="control-panel">
        <div className="panel">
          <PanelStatus
            progress={this.state.progress}
          />
          <PanelHead
            progress={this.state.progress}
            tab={this.state.tab}
            changeProgress={(progress) => this.setState({progress : progress})}
            changeTab={(tab) => this.setState({tab : tab})}
          />
          <PanelContent
            progress={this.state.progress}
            tab={this.state.tab}
          />
        </div>
      </div>
    )
  }
}
