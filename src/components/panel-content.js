import React, {Component} from 'react'

import LineItems from './panel-content/line-items'

export default class PanelHead extends Component{

  render(){
    return(
      <div className="panel-content">
        <LineItems />
      </div>
    )
  }
}
