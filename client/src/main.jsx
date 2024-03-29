import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { TransactionProvider } from './context/TransactionContext'

import './main.scss'

import 'bootstrap/dist/js/bootstrap'

ReactDOM.render(
   <React.StrictMode>
      <TransactionProvider>
         <App />
      </TransactionProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
