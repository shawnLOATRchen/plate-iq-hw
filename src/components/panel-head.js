import React, {Component} from 'react'


export default class PanelHead extends Component{
  constructor(){
    super();
    this.state = { fold: true }
  }
  toggleFold(){
    this.setState({ fold: !this.state.fold});
  }
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
          {this.state.fold ? null : <div>VENDOR</div> }
          <h4>Food Harvest Produce Vendor{" "}
            {this.state.fold ?
              <i className="fa fa-chevron-circle-down" aria-hidden="true" onClick={() => this.setState({ fold: false})}></i> :
              <i className="fa fa-chevron-circle-up" aria-hidden="true" onClick={() => this.setState({ fold: true})}></i>
            }
          </h4>
          {this.state.fold ?
            <div className="fold-detail">
              <div className="row">
                <div className="col">24482-20095</div>
                <div className="col">Jun 20, 2016</div>
                <div className="col">Kate's Taco Shop</div>
                <div className="col">Lorem ipsum...</div>
                <hr className="col"/>
              </div>
            </div>
            :
            <div className="unfold-detail">
              <div><i className="fa fa-check-circle-o" aria-hidden="true"></i> This vendor is mapped</div>
              <div className="row">
                <div className="col">24482-20095</div>
                <div className="col">Receipt</div>
                <div className="col">Kate's Taco Shop</div>
                <div className="col">subtotal</div>
              </div>
              <div className="row">
                <div className="col">Jun 20, 2016</div>
                <div className="col">Jun 20, 2016</div>
                <div className="col">Aug 10, 2016</div>
                <div className="col">Total</div>
              </div>
            </div>
          }
        </div>

        <div className="nav head-nav">
          <li className="nav-item active">Line Items</li>
          <li className="nav-item">Account Splits</li>
          <li className="nav-item">History</li>
        </div>
      </div>
    )
  }
}
