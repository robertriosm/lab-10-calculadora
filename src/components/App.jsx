// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Tecla from './Tecla'

function App({ name }) {
  // const [concat1, setConcat1] = useState('')
  // const [op, setOp] = useState('')
  // const [concat2, setConcat2] = useState('')
  // const [result, setResult] = useState(0)
  let concat1 = ''
  const concat2 = ''
  const op = ''
  const result = ''

  // eslint-disable-next-line consistent-return
  const getData = (data) => {
    const mydata = data
    switch (mydata) {
      case typeof mydata === 'number': {
        const x = parseInt(mydata, mydata.lenght)
        if (concat1.length < 9) {
          concat1 += mydata
          return x
        }
        break
      }

      case mydata === '+/-': {
        break
      }

      case mydata === '==': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '%': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === 'AC': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '/': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === 'x': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '-': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '.': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '=': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      case mydata === '+': {
        // eslint-disable-next-line no-console
        console.log(mydata)
        break
      }

      default: {
        break
      }
    }
  }

  useEffect(() => {
    // operate()
    // eslint-disable-next-line no-console
    getData()
    // return getData
  })

  // const [results, setResults] = useState('')

  return (
    <div className="app">
      <h2>? LABORATORIO 10: CALCULADORA ?</h2>
      <h3>? {name} ?</h3>
      <div className="case">
        <div className="display">
          <h4>
            {concat1}
            {op}
            {concat2} =
          </h4>
          <h3>{result}</h3>
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
}

export default App
