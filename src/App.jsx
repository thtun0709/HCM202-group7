import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VaiTroSection from './components/VaiTroSection';
import TrongSachSection from './components/TrongSachSection';
import GenZSection from './components/GenZSection';
import GiaiPhapSection from './components/GiaiPhapSection';
import KetLuanSection from './components/KetLuanSection';
import Footer from './components/Footer';
import AIUsageButton from './components/AIUsageButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VaiTroSection />
        <TrongSachSection />
        <GenZSection />
        <GiaiPhapSection />
        <KetLuanSection />
      </main>
      <Footer />
      {/* Floating AI Usage Button — luôn nổi trên mọi section */}
      <AIUsageButton />
    </>
  );
}

export default App;
