import React from 'react'
import { connect } from 'react-redux';

const IntegerResult = (props) => {
  
  return <div className='formFrom-container'>
    <h3> Resultado Numeros:  </h3>
    <p> {props.result &&  props.result}</p>
  </div>
}

const stateMapToPros = state => {
  return {
    result: state.random.result?.randomList
  }
}

export default connect(stateMapToPros)(IntegerResult)