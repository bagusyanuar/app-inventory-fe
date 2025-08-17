import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import './index.css'

const container = document.getElementById('root')!
createRoot(container).render(
  <StrictMode>
    <Routes />
  </StrictMode>
)
