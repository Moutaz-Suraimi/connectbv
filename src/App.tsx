import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { OverPage } from './pages/OverPage'
import { DienstenPage } from './pages/DienstenPage'
import { PublicatiesPage } from './pages/PublicatiesPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over" element={<OverPage />} />
        <Route path="/diensten" element={<DienstenPage />} />
        <Route path="/publicaties" element={<PublicatiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
