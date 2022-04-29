import React from 'react'
import PropTypes from 'prop-types'
import Display from './Display'
import Teclado from './Teclado'

function App({ name }) {
  return (
    <div className="app">
      <h2>? LABORATORIO 10: CALCULADORA ?</h2>
      <h3>? {name} ?</h3>
      <div className="case">
        <Display results="9999999" concat="90 + 10" />
        <Teclado />
      </div>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App
