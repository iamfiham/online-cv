import "./App.css";
import About from "./Layouts/About/About";
import Header from "./Layouts/Header/Header";

function App() {
  return (
    <>
      <div className="cover-image"></div>
      <div className="container">
        <Header />
        <About />
      </div>
    </>
  );
}

export default App;
