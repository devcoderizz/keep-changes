import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import './assets/styles/css/index.css'
import AppRoutes from './AppRoutes.jsx'
import { RecoilRoot } from 'recoil'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <Router>
    <AppRoutes/>
    </Router>
    </RecoilRoot>
  </React.StrictMode>,
)
