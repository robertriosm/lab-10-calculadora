/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tecla from '../src/components/Tecla'
import App from '../src/components/App'

const tryFunction = (aValue) => {
  return aValue
}

// desplegar correctamente los componentes y comprobar los returns de las funciones
// todos, aprobados, GREEN TEST
describe('tests para la calculadora', () => {
  // desplegar correctamente una tecla y comprobar que tiene un valor 1
  it('desplear correctamente la tecla 1', () => {
    render(<Tecla Tvalue="1" handleClick={tryFunction(0)} />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  // desplegar correctamente el componente App
  it('desplegar correctamente la app', () => {
    render(<App name="Roberto" />)
    expect(screen.getByText('+/-')).toBeInTheDocument()
  })
})
