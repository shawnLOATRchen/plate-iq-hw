import React, {Component} from 'react'

// Components
import AccountBox from './accountBox'

// data
import accountItem from '../../data/accountItem.json'

export default class AccountSplits extends Component{

  render(){
    return(
      <div className="account-splits">
        <h6>Account Splits</h6>
        <div className="row table-head">
          <div className="col-6">ACCOUNT NAME</div>
          <div className="col-4">DEPARTMENT</div>
          <div className="col-2 text-right">TOTAL</div>
        </div>
        <ul className="account-items-list">
          {accountItem.map((item, index) => {
            return(
              <AccountBox key={index} active={index === 0} item={item}/>
            )
          })}
        </ul>
      </div>
    )
  }
}
