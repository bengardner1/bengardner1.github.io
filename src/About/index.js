import TimeSinceDob from "./TimeSinceDob";
import about_pic from "../Images/about_pic.jpeg";
import about_pic2 from "../Images/about_pic2.jpeg";
import "./index.css";

function About() {
    return (
        <div className="container">
            <div className="bg-title">  
                <h1>About Me</h1>
                <p>I'm nothing and that is true, who are you? Who are you? - Bladee</p>
            </div>
            <div className="row">
                <div className="col-4"><img src={about_pic} className="bg-pfp1"/></div>
                <div className="col-8">
                    <p> Hello, my name is Ben, welcome to my website! I am currently studying Computer Science at Northeastern's Khoury College with a concentration in software. I was introduced to coding by the AP Computer Science A class during my senior year of high school. Ever since, it has been what I wanted to do!</p>
                    <p>My goal for my career is to utilize my skills to create technology that makes peoples' lives easier so they can focus on what really matters. I am interested in working in all industries, but am especially interested in music tech. I would like to have my own company one day, so I want to absorb as much industry knowledge as I can in the early stages of my career. I have experience with Java, C#, Python, SQL, Javascript, and others. I am always excited to have to opportunity to learn new technologies/languages.</p>
                    <p>I was born and raised in <a href="https://www.google.com/maps/place/west+hartford/data=!4m2!3m1!1s0x89e7acf5890414fd:0x67f9d7530e513b7c?sa=X&ved=2ahUKEwjQ_fS46aODAxWKv4kEHchVDtAQh8EJegQIERAA" target="_blank">West Hartford, CT</a> and moved to Boston to attend Northeastern University. I am half Taiwanese, and half Caucasian. When I'm not coding, I like to read about history and play with my dog, Star. I also like to play saxophone when I have the time. If you either like or hate this website, please let me know! </p>
                </div>
            </div>
            <div className="row">
            <div className="bg-facts col-md-5 mx-auto my-5">
                <div className="bg-facts-card pt-3">
                    <p>Name: Ben Gardner</p>
                    <p>Hometown: West Hartford, CT</p>
                    <p>Favorite Color: Green</p>
                    <p>Favorite Food: Korean</p>
                    <p>Instrument: Sax</p>
                    <p>Geoguessr High Score: 24998</p>
                    <p>Musical Artist: Bladee</p>
                    <p>Show: Atlanta</p>
                    <p>Other interests: History, Geography, Music</p>
                    <p>Personality Type: INTJ</p>
                    <TimeSinceDob />
                </div>
                </div>
                <div className="col-md-4">
                <img src={about_pic2} className="bg-pfp1 ms-5"/>
                </div>
                </div>
                <div className="row">
                    <div className="bg-facts col-md-8 mx-auto my-5">
                        <h5>Website Credits</h5>
                        <p>This website was built using React.js and Bootstrap.</p>
                    </div></div>
        </div>
    );
}
export default About;