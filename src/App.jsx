import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Photos from './pages/Photos.jsx'
import Writing from './pages/Writing.jsx'

export default function App() {
  const location = useLocation()
  return (
    <>
      <CursorGlow />
      <Nav />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
      <Footer />
    </>
  )
}
