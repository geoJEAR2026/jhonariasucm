import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProveedorIdioma } from './i18n/IdiomaContexto.jsx'
import './styles/global.css'
import './styles/componentes.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorIdioma>
      <App />
    </ProveedorIdioma>
  </React.StrictMode>
)
