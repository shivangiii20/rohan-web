import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './ThemeContext'; // ✅ NEW IMPORT

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeContextProvider> {/* ✅ Wrap your App */}
    <App />
     </ThemeContextProvider>
  </StrictMode>,
)
