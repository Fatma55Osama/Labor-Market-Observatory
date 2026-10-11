import Hero from '../components/Hero'
import KPISection from '../components/KPISection'
import MapSection from '../components/MapSection'
import AnalysisSection from '../components/AnalysisSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import NewsSection from '../components/NewsSection'
import PioneersSection from '../components/PioneersSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <KPISection />
      <MapSection />
      <AnalysisSection />
      <StatsSection />
      <ServicesSection />
      <NewsSection />
      <PioneersSection />
    </>
  )
}
