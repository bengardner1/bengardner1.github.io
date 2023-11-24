import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from "./Nav";
import './vendors/css/bootstrap.min.css';
import "./index.css";

function App() {
  return (
    <HashRouter>
    <div>
      <Nav/>
    <Routes>
    <Route path="/"         element={<Navigate to="/home"/>}/>
          <Route path="/home"    element={<Home/>}/>
          <Route path="/about"    element={<About/>}/>
          <Route path="/projects"    element={<Projects/>}/>
        </Routes>
      </div>
      </HashRouter>
  );
}
export default App;