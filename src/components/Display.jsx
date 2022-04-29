import React from 'react'
import PropTypes from 'prop-types'

function Display({ results, concat }) {
  return (
    <div className="display">
      <h4>{concat} =</h4>
      <h3>{results}</h3>
    </div>
  )
}

Display.propTypes = {
  results: PropTypes.string.isRequired,
  concat: PropTypes.string.isRequired,
}

export default Display
