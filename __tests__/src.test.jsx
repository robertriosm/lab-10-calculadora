import Adapter from 'enzyme-adapter-react-16'
// import { shallow, configure, mount } from 'enzyme'
import { shallow, configure, render } from 'enzyme'
import React from 'react'
import '@testing-library/jest-dom'
// import { screen } from '@testing-library/react'
import App from '../src/components/App'
// import Tecla from '../src/components/Tecla'

configure({ adapter: new Adapter() })
// const tryFunction = (aValue) => {
//   return aValue
// }

// desplegar correctamente los componentes y comprobar los returns de las funciones
// todos, aprobados, GREEN TEST
describe('tests para la calculadora', () => {
  // test para la suma
  it('test de suma', () => {
    const wrapper = shallow(<App name="Roberto" />)
    wrapper.find({ Tvalue: '1' }).simulate('click')
    wrapper.find({ Tvalue: '0' }).simulate('click')
    wrapper.find({ Tvalue: '+' }).simulate('click')
    wrapper.find({ Tvalue: '1' }).simulate('click')
    wrapper.find({ Tvalue: '0' }).simulate('click')
    wrapper.find({ Tvalue: '=' }).simulate('click')
    // expect(screen.queryByText('20')).toBeInTheDocument()
    expect(wrapper.find('h3#results'))

    const wrapper2 = render(<App name="Roberto" />)
    let concat = wrapper2.find('concatenar')
    concat.
    // eslint-disable-next-line no-console
    // console.log(result)
    // expect()
    // test para la resta
    // test para la multiplicacion
    // test para la division
    // test para cambiar signo
    // test para modulos
    // test para la concatenacion
    // test para la igualdad
  })
})
