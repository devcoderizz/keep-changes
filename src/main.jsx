import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import './assets/styles/css/index.css'
import AppRoutes from './AppRoutes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AppRoutes/>
    </Router>
  </React.StrictMode>,
)
