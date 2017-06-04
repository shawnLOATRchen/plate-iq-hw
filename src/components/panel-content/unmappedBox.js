import React, {Component} from 'react'

export default class UnmappedBox extends Component{

  render(){
    const item = this.props.item;
    return(
      <div className="unmapped-box">
        <div className="row box-top align-items-center">
          <input className="col-1" type="checkbox"/>
          <div className="col-5 d-flex flex-column">
            <div className="name">{item.name}</div>
            <div className="tips"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> Select Account</div>
          </div>
          <div className="col-2">{item.quantity}</div>
          <div className="col-2 text-center">${item.price} <span className="unit">{item.unit}</span></div>
          <div className="col-2 text-right">${item.total}</div>
        </div>
        <hr/>
        <div className="box-bottom row">
          <div className="col-1"></div>
          <div className="bottom-detail col-9 row">
            {!item.bottomDetail.includes("account") ? null :
              <div className="input-group col-7">
                <select className="form-control">
                  <option>Select Account</option>
                </select>
              </div>}
            {!item.bottomDetail.includes("department") ? null :
              <div className="input-group col-5">
                <select className="form-control">
                  <option>Select Department</option>
                </select>
              </div>}
            {!item.bottomDetail.includes("editing") ? null :
              <div className="input-group col-12 input-box">
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                <input type="text" className="form-control" defaultValue="Vegetables & Produce 4460 - 9800"/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button"><i className="fa fa-times" aria-hidden="true"></i></button>
                </span>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button"><i className="fa fa-check" aria-hidden="true"></i></button>
                </span>
              </div>}
          </div>
          <div className="bottom-icons col-2 d-flex justify-content-around align-items-center">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
      </div>


    )
  }
}
