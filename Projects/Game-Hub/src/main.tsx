import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss'
import 'flowbite'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // strict mode disabled for checking loading functionality
  <StrictMode>
      <App />
  </StrictMode>,
)
