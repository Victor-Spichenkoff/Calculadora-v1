import React from 'react'
import ReactDOM from 'react-dom'

//meus JSX
import './css/style.css'
import './css/calculator.css'
import Calculator from './elements/Calculator'
//meus JS
import './operations/numbersLogic'
import './operations/comandsLogic'


ReactDOM.render(<Calculator />, document.getElementById('calculator'))