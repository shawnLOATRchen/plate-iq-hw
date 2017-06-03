import React, {Component} from 'react'

export default class AccountBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className={"list-group-item account-box row" + (this.props.active ? " active-row":"")}>
        <div className="col-6 name">{item.name}</div>
        <div className="col-4">{item.department}</div>
        <div className="col-2 text-right">${item.total}</div>
      </div>
    )
  }
}
