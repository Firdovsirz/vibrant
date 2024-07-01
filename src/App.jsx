// App.js
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import CommentSection from './sections/CommentSection/CommentSection';
import DownloadSection from './sections/DownloadSection/DownloadSection';
import InfoSection from './sections/InfoSection/InfoSection';
import MainSection from './sections/MainSection/MainSection';
import { Routes, Route, useLocation } from 'react-router-dom';
import PurchaseSection from './sections/PurchaseSection/PurchaseSection';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top when location changes
  }, [location]);

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
