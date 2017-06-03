import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route} from 'react-router-dom';

// components
import Header from './components/header'
import PDFReader from './components/pdf-reader'
import ControlPanel from './components/control-panel'


// stylesheet
import '../dist/sass/index.sass'


class App extends Component{

  render(){
    return(
      <main>
        <Header />
        <section className="row">
          <PDFReader />
          <ControlPanel />
        </section>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
