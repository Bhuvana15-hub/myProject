import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Contact from './pages/ContactUs.jsx'
// import ManagementPage from './pages/Management.jsx'
// import DemoManagePage from './pages/DemoManage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
  </StrictMode>
)
