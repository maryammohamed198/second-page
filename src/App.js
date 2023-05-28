import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Page2 from "./pages/page2";
import Page1 from "./pages/page1";
import { CardsSlider } from "./components/section/CardsSlider";
import FirstHeader from "./components/section/FirstHeader";
import SecHeader from "./components/section/SecHeader";
import Sider from "./components/section/Sider";
import Header from "./components/Navs/Hreader";
import "./components/section/Section.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="section_container d-flex justify-content-center align-content-center">
        <section claasName="section">
          <FirstHeader />
          <div className="  " style={{ height: "75px", textalign: "center" }}>
            <h2>shop by Brand</h2>
          </div>

          <Routes>
            <Route path="page2" element={<Page2 />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="" element={<Page1 />} />
          </Routes>
          <SecHeader />

          <Sider></Sider>
          <dir className="cards">
            <CardsSlider></CardsSlider>
          </dir>

          <div></div>
        </section>
      </div>

      {/* <Page2></Page2> */}
    </div>
  );
}

export default App;
