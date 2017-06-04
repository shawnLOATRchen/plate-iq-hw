import React, {Component} from 'react'

export default class PDFReader extends Component{

  render(){
    return(
      <div className="pdf-reader">
        <div className="pdf-container">
          <object data="./dist/invoice.pdf" type="application/pdf">
            <p>Alternative text - include a link <a href="./dist/invoice.pdf">to the PDF!</a></p>
          </object>
        </div>
        <div className="control-panel row">
          <div className="zoom col-5 d-flex justify-content-between align-items-center">
            <i className="fa fa-search-minus" aria-hidden="true"></i>
            <div className="bar"/>
            <div className="circle"/>
            <i className="fa fa-search-plus" aria-hidden="true"></i>
          </div>
          <div className="page col-2 d-flex justify-content-around align-items-center">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span> 1/3 </span>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
          <div className="btns col-5 d-flex justify-content-between align-items-center">
            <a href="invoice.pdf">
              <div className="btn btn-secondary"><i className="fa fa-download" aria-hidden="true"></i> Download PDF</div>
            </a>
            <div className="dropup">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="pdfReaderDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
              </button>
              <div className="dropdown-menu" aria-labelledby="pdfReaderDropDown">
                <div className="dropdown-item d-flex justify-content-between align-items-center trash" href="#">
                  <span>Delete invoice image</span>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
                <div className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <span>upload new image</span>
                  <i className="fa fa-upload" aria-hidden="true"></i>
                </div>
                <hr/>
                <div className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <span>Fullscreen</span>
                  <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                </div>
                <div className="dropdown-item d-flex justify-content-between align-items-center" href="#">
                  <span>Rotate 90</span>
                  <i className="fa fa-undo" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
