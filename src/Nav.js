import { Link, useLocation} from "react-router-dom";
function Nav() {
 const { pathname } = useLocation();
 return (
    <nav className="nav nav-tabs mt-2">
         <Link className={`nav-link ${pathname.includes("home") ? "active" : ""}`} to="/home">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/pics">Pics</Link>
        <Link className="nav-link" to="/fun">Fun</Link>
    </nav>
    );
}
export default Nav;
