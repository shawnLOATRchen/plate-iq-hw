import React, {Component} from 'react'

export default class PDFReader extends Component{

  render(){
    return(
      <div className="pdf-reader">
        <object data="invoice.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="myfile.pdf">to the PDF!</a></p>
        </object>
      </div>
    )
  }
}
