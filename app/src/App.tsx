import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NosMetiers from './pages/NosMetiers'
import NosRealisations from './pages/NosRealisations'
import NosExpertises from './pages/NosExpertises'
import Carrieres from './pages/Carrieres'
import APropos from './pages/APropos'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nos-metiers" element={<NosMetiers />} />
        <Route path="/nos-realisations" element={<NosRealisations />} />
        <Route path="/nos-expertises" element={<NosExpertises />} />
        <Route path="/carrieres" element={<Carrieres />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
