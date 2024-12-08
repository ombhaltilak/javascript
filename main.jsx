import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './APP.jsx'
import Profile from './components/profile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile /> */}
  </StrictMode>,
)
