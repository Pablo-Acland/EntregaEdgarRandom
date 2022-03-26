import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'
import IntegerForm from '../components/IntegerForm'
import IntegerResult from '../components/IntegerResult'
class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <IntegerForm />
        <From />
        <IntegerResult />
        <Result />
      </div>
    )
  }
}

export default App


