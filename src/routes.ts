import { createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import HomePage from './pages/HomePage'
import IndicatorsPage from './pages/IndicatorsPage'
import MapPage from './pages/MapPage'
import ReportsPage from './pages/ReportsPage'
import ServicesPage from './pages/ServicesPage'
import MediaPage from './pages/MediaPage'
import AboutPage from './pages/AboutPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'indicators', Component: IndicatorsPage },
      { path: 'map', Component: MapPage },
      { path: 'reports', Component: ReportsPage },
      { path: 'services', Component: ServicesPage },
      { path: 'media', Component: MediaPage },
      { path: 'about', Component: AboutPage },
    ],
  },
])
