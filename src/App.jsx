import {CoverImage} from './Componants/CoverImage';
import './App.scss';
import About from './Layouts/About/About';
import Header from './Layouts/Header/Header';
import Works from './Layouts/Works/Works';

function App() {
  return (
    <>
      <CoverImage />
      <div className='wrapper'>
        <Header />
        <About />
        <Works />
      </div>
    </>
  );
}

export default App;
