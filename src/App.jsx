import './App.css'
import Header from './components/Header/Header'
import DownloadSection from './sections/DownloadSection/DownloadSection'
import InfoSection from './sections/InfoSection/InfoSection'
import MainSection from './sections/MainSection/MainSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <MainSection />
        <InfoSection />
        <DownloadSection />
      </main>
    </>
  )
}
export default App
