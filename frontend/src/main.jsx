


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import { Provider } from "react-redux";

import store from './redux/store.jsx'



import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
    <App />
  </StrictMode>,

  </Provider>
  
)
