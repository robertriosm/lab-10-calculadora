// import React, { useEffect } from 'react'
import React from 'react'
// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tecla from './Tecla'

function App({ name, results }) {
  const concat = ''
  // let n2 = 2
  const getData = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
    return data
  }

  // const operate = () => {
  //   const mydata = getData
  //   // eslint-disable-next-line no-console
  //   console.log(mydata)
  //   switch (mydata) {
  //     case typeof mydata === 'number': {
  //       const x = parseInt(mydata, mydata.lenght)
  //       // eslint-disable-next-line no-console
  //       console.log(x)
  //       break
  //     }

  //     case mydata === '+/-': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '==': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '%': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === 'AC': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '/': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === 'x': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '-': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '.': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '=': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     case mydata === '+': {
  //       // eslint-disable-next-line no-console
  //       console.log(mydata)
  //       break
  //     }

  //     default: {
  //       break
  //     }
  //   }
  // }

  // useEffect(operate)

  // const [results, setResults] = useState('')

  return (
    <div className="app">
      <h2>? LABORATORIO 10: CALCULADORA ?</h2>
      <h3>? {name} ?</h3>
      <div className="case">
        <div className="display">
          <h4>{concat} =</h4>
          <h3>{results}</h3>
        </div>
        <div className="teclado">
          <Tecla Tvalue="+/-" fetchData={getData} />
          <Tecla Tvalue="==" fetchData={getData} />
          <Tecla Tvalue="%" fetchData={getData} />
          <Tecla Tvalue="AC" fetchData={getData} />
          <Tecla Tvalue="7" fetchData={getData} />
          <Tecla Tvalue="8" fetchData={getData} />
          <Tecla Tvalue="9" fetchData={getData} />
          <Tecla Tvalue="/" fetchData={getData} />
          <Tecla Tvalue="4" fetchData={getData} />
          <Tecla Tvalue="5" fetchData={getData} />
          <Tecla Tvalue="6" fetchData={getData} />
          <Tecla Tvalue="x" fetchData={getData} />
          <Tecla Tvalue="1" fetchData={getData} />
          <Tecla Tvalue="2" fetchData={getData} />
          <Tecla Tvalue="3" fetchData={getData} />
          <Tecla Tvalue="-" fetchData={getData} />
          <Tecla Tvalue="0" fetchData={getData} />
          <Tecla Tvalue="." fetchData={getData} />
          <Tecla Tvalue="=" fetchData={getData} />
          <Tecla Tvalue="+" fetchData={getData} />
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
}

export default App
