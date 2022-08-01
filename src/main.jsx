import React from 'react'
import ReactDOM from 'react-dom/client'
// Importamos de manera nombrada desde App.jsx
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)