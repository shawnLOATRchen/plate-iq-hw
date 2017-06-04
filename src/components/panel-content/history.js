import React, {Component} from 'react'

// Components
import ActivityBox from './activityBox'

// data
import historyItem from '../../data/historyItem.json'

export default class AccountSplits extends Component{

  render(){
    return(
      <div className="history">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Recent Activity</h6>
          <div className="btn btn-secondary btn-flag"><i className="fa fa-flag" aria-hidden="true"></i> Flag Invoice</div>
        </div>
        {historyItem.map((item, index) => {
          return(
            <ActivityBox key={index} item={item}/>
          )
        })}
      </div>
    )
  }
}
