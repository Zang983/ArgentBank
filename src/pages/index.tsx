import Features from '../components/features/features';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import HeroContent from '../components/heroContent/heroContent';

export default function Index() {
  return (
<>
      <Header />
      <main>
      <HeroContent/>
      <Features/>
      </main>
      <Footer/>
</>
  );
}


