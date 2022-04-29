import React from 'react'
// import PropTypes from 'prop-types'

function Teclado() {
  return (
    <div className="teclado">
      <input type="button" value="+/-" />
      <input type="button" value="==" />
      <input type="button" value="%" />
      <input type="button" value="AC" />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" value="/" />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" value="x" />
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" value="-" />
      <input type="button" value="0" />
      <input type="button" value="." />
      <input type="button" value="=" />
      <input type="button" value="+" />
    </div>
  )
}

Teclado.propTypes = {}

export default Teclado
