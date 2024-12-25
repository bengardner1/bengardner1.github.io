import React from 'react';
import "./index.css";

const Socials = () => {
    return (<div className="bg-socials">
            <p className="lead">Check me out on these platforms:</p>
                <a href="https://www.linkedin.com/in/benjamingardner11/" target="_blank" className="linkedin-link"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://open.spotify.com/user/0dilsw1nez3edhz0orz58n2ym?si=66dbffb396024353" target="_blank" className="spotify-link"><i className="fab fa-spotify fa-2x"></i></a>
                <a href="https://www.instagram.com/benthegardnerr/" target="_blank" className="instagram-link"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://github.com/bengardner1" target="_blank" className="github-link"><i className="fab fa-github fa-2x"></i></a>
                <a href="https://www.goodreads.com/user/show/183735062-ben-gardner" target="_blank" className="goodreads-link"><i className="fab fa-goodreads fa-2x"></i></a>
                <a href="https://www.last.fm/user/Machgengarden" target="_blank" className="lastfm-link"><i className="fab fa-lastfm fa-2x"></i></a>
            </div>
    );
}
export default Socials;
