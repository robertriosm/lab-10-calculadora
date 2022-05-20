import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/components/App'

describe('tests para la calculadora', () => {
  // test para la suma
  it('test de suma', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('+'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('20')
  })
  // test para la resta
  it('test de resta', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('-'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('0')
  })
  // test para la multiplicacion
  it('test de multiplicacion', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('x'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('100')
  })
  // test para la division
  it('test de division', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('/'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('error')
  })
  // test para cambiar signo
  it('test del boton +/-', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('+'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    fireEvent.click(document.getElementById('+/-'))
    expect(screen.getByTestId('result')).toHaveTextContent('-20')
    fireEvent.click(document.getElementById('+/-'))
    expect(screen.getByTestId('result')).toHaveTextContent('20')
  })
  // test para modulos
  it('test para modulos', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('%'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('0')
  })
  // test para la igualdad
  it('test para verificar igualdad ==', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('=='))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('true')
  })
  // test para la concatenacion
  it('test del limite de la concatenacion (9 digitos)', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('x'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('error')
  })
})
