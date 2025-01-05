import Banner from './components/Banner';
import Content from './components/Content';
import Newsletter from './components/NewsLetter';
import TravelWithUs from './components/TravelWithUs';

export default function HomePageBanner() {
  return (
    <>
      <Banner/>
      <Content/>
      <TravelWithUs/>
      <Newsletter/>
    </>
  );
}