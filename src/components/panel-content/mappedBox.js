import React, {Component} from 'react'

export default class MappedBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className="list-group-item mapped-box row">
        <div className="col-6 d-flex flex-column">
          <div className="name">{item.name}</div>
          <div className="label">{item.label}</div>
        </div>
        <div className="col-2">{item.quantity}</div>
        <div className="col-2 text-center">${item.price} <span className="unit">{item.unit}</span></div>
        <div className="col-2 d-flex flex-column text-right">
          <div className={"total"+ (item.taxed ? " strong" : "")}>${item.total}</div>
          {item.taxed ? <div className="taxed">Taxed</div> : null}
        </div>
      </div>
    )
  }
}
