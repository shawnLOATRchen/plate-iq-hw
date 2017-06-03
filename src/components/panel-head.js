import React, {Component} from 'react'


export default class PanelHead extends Component{

  render(){
    return(
      <div className="panel-head">
        <div className="head-action d-flex justify-content-between">
          <div className="action-direct">DIRECT</div>
          <div className="action-btns d-flex justify-content-between">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <button className="btn btn-primary" type="button">
              Approve
            </button>
          </div>
        </div>
        <div className="head-detail">
          <h4>Food Harvest Produce Vendor <i className="fa fa-chevron-circle-down" aria-hidden="true"></i></h4>
        </div>

        <ul className="nav head-nav">
          <li className="nav-item active">Line Items</li>
          <li className="nav-item">Account Splits</li>
          <li className="nav-item">History</li>
        </ul>
      </div>
    )
  }
}
