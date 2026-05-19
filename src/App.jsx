import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BrandLoader from './components/brand/BrandLoader'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Ecosystem from './pages/Ecosystem'
import CaseStudies from './pages/CaseStudies'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import LocalServices from './pages/LocalServices'

export default function App() {
  const [appReady, setAppReady] = useState(false)

  return (
    <>
      {!appReady && <BrandLoader onComplete={() => setAppReady(true)} />}
      {appReady && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="ecosystem" element={<Ecosystem />} />
              <Route path="case-studies" element={<CaseStudies />} />
              <Route path="industries" element={<Industries />} />
              <Route path="insights" element={<Insights />} />
              <Route path="contact" element={<Contact />} />
              <Route path="ai-business-systems-india" element={<LocalServices />} />
              <Route path="thank-you" element={<ThankYou />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}
