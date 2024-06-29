import './App.css'
import Header from './components/Header/Header'
import InfoSection from './sections/InfoSection/InfoSection'
import MainSection from './sections/MainSection/MainSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <MainSection />
        <InfoSection />
      </main>
    </>
  )
}
export default App
