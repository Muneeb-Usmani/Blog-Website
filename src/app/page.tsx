import Banner from './components/Banner';
import Content from './components/Content';
import FeaturesSection from './components/Features';
import Newsletter from './components/NewsLetter';
import TravelWithUs from './components/TravelWithUs';

export default function HomePageBanner() {
  return (
    <>
      <Banner/>
      {/* <FeaturesSection/> */}
      <Content/>
      <TravelWithUs/>
      <Newsletter/>
      </>
  );
}