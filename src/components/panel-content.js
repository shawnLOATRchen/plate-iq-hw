import React, {Component} from 'react'

import LineItems from './panel-content/line-items'
import AccountSplits from './panel-content/account-splits'
import History from './panel-content/history'

export default class PanelHead extends Component{

  renderTab(){
    switch(this.props.tab){
      case "history":
        return (<History />)
      case "account-splits":
        return (<AccountSplits />)
      case "line-items":
      default:
        return (<LineItems />)
    }
  }

  render(){
    return(
      <div className="panel-content">
        {this.renderTab()}
      </div>
    )
  }
}
