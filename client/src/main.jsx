import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { TransactionProvider } from './context/TransactionContext'

import './main.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
