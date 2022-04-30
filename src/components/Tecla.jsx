import propTypes from 'prop-types'
import React from 'react'
// import { useState } from 'react/cjs/react.production.min'
// import PropTypes from 'prop-types'

function Tecla({ Tvalue, fetchData }) {
  const handleClick = () => {
    fetchData(Tvalue)
  }

  return (
    <div className="tecla">
      <input type="button" id={Tvalue} onClick={handleClick} value={Tvalue} />
    </div>
  )
}

Tecla.propTypes = {
  Tvalue: propTypes.string.isRequired,
  fetchData: propTypes.func.isRequired,
}

export default Tecla
