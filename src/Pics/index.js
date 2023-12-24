import "./index.css";
import pics from "./pics.json";
function Pics() {
    return (
        <div>
            <div className="bg-title">  
                <h1>Pictures</h1>
                <p>Here are some pictures of me and my life.</p>
                <p>I paint a perfect picture, strike that, a beautiful image - Bladee</p>
            </div>
                {pics.map((pic) => (<div><img src={pic.path} className="bg-pic"></img> <p className="pt-3">{pic.description}</p></div>))}
           
        </div>
    );
}
export default Pics;