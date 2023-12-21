import TimeSinceDob from "./TimeSinceDob";
import profilepic from "../Images/profilepic.jpeg";


function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <p>My name is Ben.</p>
            <TimeSinceDob />
            <img src={profilepic} className="bg-pfp1"/>
            List credits here:
            Fonts, React, Bootstrap, etc.
            Also list more socials here:
        </div>
    );
}
export default About;