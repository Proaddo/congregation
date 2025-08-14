// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ImageProvider } from './context/ImageContext' // Import the provider
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider>  {/* Wrap App with provider */}
      <App />
    </ImageProvider>
  </React.StrictMode>
)