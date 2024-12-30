import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Pics from "./Pics";
import Fun from "./Fun";
import Writing from "./Writing";
import Piece from "./Writing/piece";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import './vendors/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import "./index.css";
import "./Fonts/font.css"

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <header className="pr-3">
          <Nav/>
        </header>
        <main className="flex-grow-1 pb-5 mb-5">
          <Routes>
            <Route path="/*"    element={<Navigate to="/home"/>}/>
            <Route path="/home"    element={<Home/>}/>
            <Route path="/about"    element={<About/>}/>
            <Route path="/projects"    element={<Projects/>}/>
            {/* <Route path="/pics"    element={<Pics/>}/>
            <Route path="/writing"    element={<Writing/>}/>
            <Route path="/fun"    element={<Fun/>}/>
            <Route path="/writing/:piece" element={<Piece/>}/> */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </HashRouter>
  );
}
export default App;