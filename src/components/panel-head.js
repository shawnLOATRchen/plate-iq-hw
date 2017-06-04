import React, {Component} from 'react'


export default class PanelHead extends Component{
  constructor(){
    super();
    this.state = { fold: true }
  }
  handleProgress(){
    switch (this.props.progress) {
      case "explorted":
        return this.props.changeProgress("direct")
      case "paid":
        return this.props.changeProgress("explorted")
      case "direct":
      default:
        return this.props.changeProgress("paid")
    }
  }
  buttonText(){
    switch (this.props.progress) {
      case "explorted":
        return "Explorted again"
      case "paid":
        return "Explort"
      case "direct":
      default:
        return "Approve"
    }
  }
  render(){
    return(
      <div className="panel-head">
        <div className="head-action d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="action-label"><i className="fa fa-envelope" aria-hidden="true"></i><span></span>DIRECT</div>
            {this.props.progress !== "direct" ? <div className="action-label"><i className="fa fa-circle" aria-hidden="true"></i>PAID</div> : null}
            {this.props.progress === "explorted" ? <div className="action-label"><i className="fa fa-circle" aria-hidden="true"></i>EXPLORTED</div> : null}
          </div>

          <div className="action-btns d-flex justify-content-between">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Export</a>
                <a className="dropdown-item" href="#">Mark as exported</a>
                <hr/>
                <a className="dropdown-item" href="#">Setup vendor</a>
                <hr/>
                <a className="dropdown-item" href="#">Flag invoice</a>
                <a className="dropdown-item" href="#">Archive invoice</a>
                <a className="dropdown-item" href="#">Delete invoice</a>
              </div>
            </div>
            <button className={"btn main-action btn-" + (this.props.progress === "direct" ? "blue":"green")} type="button" onClick={() => this.handleProgress()}>
              {this.buttonText()}
            </button>
          </div>
        </div>

        <div className="head-detail">
          {this.state.fold ? null : <div className="vender-text">VENDOR</div> }
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
                <div className="col last">Lorem ipsum...</div>
                <hr className="col"/>
              </div>
              <div className="d-flex justify-content-between align-items-center total">
                <div className="text">TOTAL</div>
                <div className="price"><span>$</span>1,333.00</div>
              </div>
            </div>
            :
            <div className="unfold-detail">
              <div className="vender-mapped"><i className="fa fa-check-circle-o" aria-hidden="true"></i> This vendor is mapped</div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <div className="title">INVOICE NO.</div>
                  <div className="content">24482-20095</div>
                </div>
                <div className="col d-flex flex-column">
                  <div className="title">INVOICE TYPE</div>
                  <div className="content">Receipt</div>
                </div>
                <div className="col d-flex flex-column">
                  <div className="title">RESTAURANT</div>
                  <div className="content">Kate's Taco Shop</div>
                </div>
                <div className="col d-flex flex-column subtotal">
                  <div className="d-flex justify-content-between">
                    <span className="left">SUBTOTAL</span>
                    <span className="right">$1300.00</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="left">TAX</span>
                    <span className="right">$26.32</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column">
                  <div className="title">POSTING DATE</div>
                  <div className="content">Jun 20, 2016</div>
                </div>
                <div className="col d-flex flex-column">
                  <div className="title">INVOICE DATE</div>
                  <div className="content">Jun 20, 2016</div>
                </div>
                <div className="col d-flex flex-column">
                  <div className="title">DUE DATE</div>
                  <div className="content">Aug 10, 2016</div>
                </div>
                <div className="col d-flex justify-content-between align-items-center total">
                  <div className="title">TOTAL</div>
                  <div className="price"><span>$</span>1,333.00</div>
                </div>
              </div>
              <hr />
              <div className="enter-memo"><i className="fa fa-comment-o" aria-hidden="true"></i> Click to enter Memo</div>
            </div>
          }
        </div>

        <div className="nav head-nav">
          <li className={"nav-item" + (this.props.tab === "line-items" ? " active" : "")} onClick={() => this.props.changeTab("line-items")}>Line Items</li>
          <li className={"nav-item" + (this.props.tab === "account-splits" ? " active" : "")} onClick={() => this.props.changeTab("account-splits")}>Account Splits</li>
          <li className={"nav-item" + (this.props.tab === "history" ? " active" : "")} onClick={() => this.props.changeTab("history")}>History</li>
        </div>
      </div>
    )
  }
}
