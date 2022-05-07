import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.sass'

const myname = 'ROBERTO RIOS, 20979'
ReactDOM.render(<App name={myname} />, document.getElementById('app'))
