import React, {Component} from 'react'

import UnmappedBox from './unmappedBox'
import MappedBox from './mappedBox'
// data
import unmappedItem from '../../data/unmappedItem.json'
import mappedItem from '../../data/mappedItem.json'

export default class LineItems extends Component{

  render(){
    return(
      <div className="line-items">
        <h6>Unmapped Items</h6>
        <div className="unmapped-items">
          <div className="row table-head">
            <input className="col-1" type="checkbox"/>
            <div className="col-5">ITEM NAME</div>
            <div className="col-2">QUANTITY</div>
            <div className="col-2">UNIT PRICE</div>
            <div className="col-2 text-right">TOTAL</div>
          </div>
          {unmappedItem.map((item, index) => {
            return(
              <UnmappedBox key={index} item={item}/>
            )
          })}
        </div>
        <br />
        <h6>Mapped Items</h6>
        <div className="mapped-items">
          <div className="row table-head">
            <div className="col-6">ITEM NAME</div>
            <div className="col-2">QUANTITY</div>
            <div className="col-2">UNIT PRICE</div>
            <div className="col-2 text-right">TOTAL</div>
          </div>
        </div>
        <ul className="mapped-items-list">
          {mappedItem.map((item, index) => {
            return(
              <MappedBox key={index} item={item}/>
            )
          })}
        </ul>
      </div>
    )
  }
}
