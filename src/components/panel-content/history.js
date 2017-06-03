import React, {Component} from 'react'

// Components
import ActivityBox from './activityBox'

// data
import historyItem from '../../data/historyItem.json'

export default class AccountSplits extends Component{

  render(){
    return(
      <div className="history">
        <h6>Recent Activity</h6>
        {historyItem.map((item, index) => {
          return(
            <ActivityBox key={index} item={item}/>
          )
        })}
      </div>
    )
  }
}
