import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Contact from './pages/ContactUs.jsx'
// import ManagementPage from './pages/Management.jsx'
// import DemoManagePage from './pages/DemoManage.jsx'
import TestPage from './pages/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestPage />
  </StrictMode>
)
