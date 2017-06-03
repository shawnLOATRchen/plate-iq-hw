import React, {Component} from 'react'

export default class Header extends Component{

  render(){
    return(
      <header className="navbar-toggleable-md d-flex justify-content-between">
        <a className="navbar-brand" href="#">Plate IQ <i className="fa fa-home" aria-hidden="true"></i></a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Hot List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Spend Analysis</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Items</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Invoices<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Recipes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vendors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Accounting</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
              <i className="fa fa-user" aria-hidden="true"></i> Maniack
            </a>
          </li>
        </ul>
      </header>
    )
  }
}
