import './App.css';
import Navi from './navi/navi';
import Home from './home/home';
import Section_2 from './section_2/section_2';
import Section_3 from './section_3/section_3';
import Section_4 from './section_4/section_4';
import Section_5 from './section_5/start';
import Section_5_1 from './section_5_1/section_5_1';
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
      <div><Navi/></div>
      <div><Home/></div>
      <div><Section_2/></div>
      <div><Section_3/></div>
      <div><Section_4/></div>
      <div><Section_5_1/></div>
      <div><Section_5/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
