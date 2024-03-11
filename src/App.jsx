import "./App.css";
import About from "./Layouts/About/About";
import Header from "./Layouts/Header/Header";
import Works from "./Layouts/Works/Works";
import Banner from "./assets/banner.jpg";

function App() {
  return (
    <>
      <div className="cover-image">
        <img src={Banner} alt="banner" />
      </div>
      <div className="container">
        <Header />
        <About />
        <Works />
      </div>
    </>
  );
}

export default App;
