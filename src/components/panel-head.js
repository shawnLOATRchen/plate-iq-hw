import React, {Component} from 'react'


export default class PanelHead extends Component{
  constructor(){
    super();
    this.state = { fold: true, showHover: false }
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
            {this.props.progress === "explorted" ? <div className="action-label"><i className="fa fa-circle" aria-hidden="true"></i>PAID</div> : null}
            {this.props.progress === "explorted" ? <div className="action-label"><i className="fa fa-circle" aria-hidden="true"></i>EXPLORTED</div> : null}
          </div>

          <div className="action-btns d-flex justify-content-between">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="headMoreDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </button>
              <div className="dropdown-menu" aria-labelledby="headMoreDropDown">
                <div className="dropdown-item" href="#">Export</div>
                <div className="dropdown-item" href="#">Mark as exported</div>
                <hr/>
                <div className="dropdown-item" href="#">Setup vendor</div>
                <hr/>
                <div className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <span>Flag invoice</span>
                  <i className="fa fa-flag" aria-hidden="true"></i>
                </div>
                <div className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <span>Archive invoice</span>
                  <i className="fa fa-archive" aria-hidden="true"></i>
                </div>
                <div className="dropdown-item trash d-flex justify-content-between align-items-center" href="#">
                  <span>Delete invoice</span>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
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
              <img src="./dist/img/arrow-down.png" onClick={() => this.setState({ fold: false})}/> :
              <img src="./dist/img/arrow-up.png" onClick={() => this.setState({ fold: true})}/>
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
              <div className="d-flex justify-content-between align-items-center total canhover" onMouseOver={() => this.setState({showHover:true})}>
                <div className="text">TOTAL</div>
                <div className="price"><span>$</span>1,333.00</div>
              </div>
              { this.state.showHover &&
                <div className="hover-total" onMouseOut={() => this.setState({showHover:false})}>
                  <div className="d-flex flex-column subtotal">
                    <div className="d-flex justify-content-between">
                      <span className="left">SUBTOTAL</span>
                      <span className="right">$1300.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="left">TAX</span>
                      <span className="right">$26.32</span>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center total">
                    <div className="text">TOTAL</div>
                    <div className="price"><span>$</span>1,333.00</div>
                  </div>
                </div>
              }

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
                  <div className="text">TOTAL</div>
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
