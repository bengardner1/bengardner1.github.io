import BladeeIsActuallyGood from "./Pieces/bladee-is-actually-good";
import LanguageIsolates from "./Pieces/language-isolates";
import BladeeImage from "./Pieces/bladee-is-actually-good/bladee.jpg";
function Pieces() {
    const pieces = [
        {"name" : "bladee-is-actually-good", "title" : "Bladee is Actually Good.", "date" : "2022-11-07", "tags" : ["bladee", "music", "drain gang"], "component" : <BladeeIsActuallyGood/>, "note" : <p className="inline-p">Has garnered many hits on google, just search bladee is good.</p>, "link" : "https://wrbbradio.org/articles/bladee-is-actually-good", "image" : BladeeImage},
        {"name" : "language-isolates", "title" : "Language Isolates are Really Cool", "date" : "2022-01-31", "tags" : ["linguistics"], "component" : <LanguageIsolates/>, "note" : <p className="d-inline">Check out my <a href="https://www.geoguessr.com/user/6191d093f629a70001686205" className="geoguessr-link" target="_blank">Geoguessr Account</a></p>},
        {"name" : "basic-intro-to-jazz-theory", "title" : "A Basic Introduction to Jazz Theory", "date" : "2022-03-02"},
        {"name" : "the-crazy-life-of-adolphe-sax", "title" : "The Crazy Life of Adolphe Sax", "date" : "2022-03-30"},
    ]
    return pieces;
}
export default Pieces;