import React, {Component} from 'react'

export default class UnmappedBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className="unmapped-box">
        <div className="row box-top">
          <input className="col-1" type="checkbox"/>
          <div className="col-5">{item.name}</div>
          <div className="col-2">{item.quantity}</div>
          <div className="col-2">${item.price} <span>{item.unit}</span></div>
          <div className="col-2 text-right">${item.total}</div>
        </div>
        <hr/>
        <div className="box-bottom row">
          <div className="col-1"></div>
          <div className="bottom-detail col-8">bottom-detail</div>
          <div className="bottom-icons col-3 d-flex justify-content-around">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
      </div>


    )
  }
}
