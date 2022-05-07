import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tecla from './Tecla'

const values = [
  '+/-',
  '==',
  '%',
  'AC',
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  'x',
  '1',
  '2',
  '3',
  '-',
  '0',
  '.',
  '=',
  '+',
]

function App({ name }) {
  const [concat1, setConcat1] = useState('')
  const [ops, setOps] = useState('')
  const [concat2, setConcat2] = useState('')
  const [results, setResults] = useState('')

  const operar = (s1, s2, op) => {
    const n1 = Number(s1)
    const n2 = Number(s2)
    let res = 0
    if (op === '+') {
      res = n1 + n2
    } else if (op === '-') {
      res = n1 - n2
    } else if (op === 'x') {
      res = n1 * n2
    } else if (op === '/') {
      res = n1 / n2
    } else if (op === '%') {
      res = n1 % n2
    } else if (op === '==') {
      res = n1 === n2
    }
    if (res > 999999999) {
      return 'error'
    }
    return res
  }

  const concatenar = (operador) => {
    const n = Number.parseInt(operador, 10)
    const nIsNaN = Number.isNaN(n)
    if (
      (concat1 !== '' || concat2 !== '') &&
      nIsNaN &&
      operador !== '.' &&
      operador !== 'AC' &&
      operador !== '=' &&
      operador !== '+/-' &&
      ops === ''
    ) {
      setOps(operador)
    } else if (
      (!nIsNaN && concat1.length < 9 && ops === '' && concat2 === '') ||
      (operador === '.' &&
        !concat1.includes('.') &&
        ops === '' &&
        concat2 === '')
    ) {
      setConcat1(concat1 + operador)
    } else if (
      (!nIsNaN && concat2.length < 9 && ops !== '' && concat1 !== '') ||
      (operador === '.' &&
        !concat2.includes('.') &&
        ops !== '' &&
        concat1 !== '')
    ) {
      setConcat2(concat2 + operador)
    } else if (nIsNaN && operador === 'AC') {
      setConcat1('')
      setConcat2('')
      setOps('')
      setResults(0)
    } else if (
      nIsNaN &&
      operador === '=' &&
      concat1 !== '' &&
      concat2 !== '' &&
      ops !== ''
    ) {
      const r = operar(concat1, concat2, ops)
      const historial = r.toString().substring(0, 9)
      if (historial === 'true' || historial === 'false') {
        setResults(historial)
        setConcat1('')
        setOps('')
        setConcat2('')
      } else {
        setResults(historial)
        setConcat1(historial)
        setOps('')
        setConcat2('')
      }
    } else if (
      nIsNaN &&
      operador === '+/-' &&
      concat1 !== '' &&
      concat2 === '' &&
      ops === ''
    ) {
      const r = operar(concat1, concat2, ops)
      const historial = r.toString().substring(0, 9)
      if (historial === 'true' || historial === 'false') {
        setResults(historial)
        setConcat1('')
        setOps('')
        setConcat2('')
      } else {
        setResults(historial)
        setConcat1(historial)
        setOps('')
        setConcat2('')
      }
    }
  }

  return (
    <div className="app">
      <h2>? LABORATORIO 10: CALCULADORA ?</h2>
      <h3>? {name} ?</h3>
      <div className="case">
        <div className="display">
          <h4>
            {concat1} {ops} {concat2} =
          </h4>
          <h3>{results}</h3>
        </div>
        <div className="teclado">
          {values.map((signo) => (
            <Tecla Tvalue={signo} handleClick={() => concatenar(signo)} />
          ))}
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App
