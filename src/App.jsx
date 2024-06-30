import './App.css'
import Header from './components/Header/Header'
import CommentSection from './sections/CommentSection/CommentSection'
import DownloadSection from './sections/DownloadSection/DownloadSection'
import InfoSection from './sections/InfoSection/InfoSection'
import MainSection from './sections/MainSection/MainSection'
import PurchaseSection from './sections/PurchaseSection/PurchaseSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <MainSection />
        <InfoSection />
        <DownloadSection />
        <CommentSection />
        <PurchaseSection />
      </main>
    </>
  )
}
export default App
