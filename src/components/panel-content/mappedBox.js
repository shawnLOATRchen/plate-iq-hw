import React, {Component} from 'react'

export default class MappedBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className="list-group-item mapped-box row">
        <div className="col-6">{item.name}</div>
        <div className="col-2">{item.quantity}</div>
        <div className="col-2">${item.price} <span>{item.unit}</span></div>
        <div className="col-2 text-right">${item.total}</div>
      </div>
    )
  }
}
