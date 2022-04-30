import React from 'react'
import Tecla from './Tecla'
// import PropTypes from 'prop-types'

function Teclado() {
  return (
    <div className="teclado">
      <Tecla Tvalue="+/-" />
      <Tecla Tvalue="==" />
      <Tecla Tvalue="%" />
      <Tecla Tvalue="AC" />
      <Tecla Tvalue="7" />
      <Tecla Tvalue="8" />
      <Tecla Tvalue="9" />
      <Tecla Tvalue="/" />
      <Tecla Tvalue="4" />
      <Tecla Tvalue="5" />
      <Tecla Tvalue="6" />
      <Tecla Tvalue="x" />
      <Tecla Tvalue="1" />
      <Tecla Tvalue="2" />
      <Tecla Tvalue="3" />
      <Tecla Tvalue="-" />
      <Tecla Tvalue="0" />
      <Tecla Tvalue="." />
      <Tecla Tvalue="=" />
      <Tecla Tvalue="+" />
    </div>
  )
}

Teclado.propTypes = {}

export default Teclado
