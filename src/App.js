import './App.css';
import './scss/global.scss';

import PixcelPerfect from './cmps/PixcelPerfect/PixcelPerfect'
import AppHeader from './cmps/AppHeader/AppHeader';
import SecondSection from './cmps/SecondSection/SecondSection';
import ThirdSection from './cmps/ThirdSection/ThirdSection';
import FourthSection from './cmps/FourthSection/FourthSection';
import FifthSection from './cmps/FifthSection/FifthSection';
import AppFooter from './cmps/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <PixcelPerfect></PixcelPerfect>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
