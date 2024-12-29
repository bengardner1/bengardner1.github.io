import Tree from './Tree';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './index.css';


function Home() {
    return (
        <div>
            <section className="bg-banner-section">
                <img src="/Pics/photos_of_me/banner_pic.jpeg" className='bg-banner-pic'></img>
                <div className="bg-banner-container bg-banner-column"> 
                    <div>
                    <h3>Ben Gardner</h3> 
                    <h4>Software Engineer, Student</h4>
                    <a href='https://www.linkedin.com/in/benjamingardner11/' target='_blank' className='bg-banner-link'><FaLinkedin size={50}/></a>
                    <a href='https://github.com/bengardner1' target='_blank' className='bg-banner-link'><FaGithub size={50}/></a>
                    <a href='mailto:bengardner433@gmail.com' className='bg-banner-link'><IoMail size={50}/></a>
                    </div>
                </div>
                </section>
                <section className='bg-hello mt-5'>
                <div className='bg-hello-text'>
                    <p className='mb-4'>Hi, I'm Ben. I'm currently pursuing my BS in Computer Science at Northeastern University. My goal with this website is to not only give you an impression of myself as professional, but also demonstrate who I am as a person. Please feel free to reach out by email.</p>
            <div className='row mt-3 justify-content-center pb-4 mb-5'>
                <div className='col-4 text-center'>
                    <a href="/resume.pdf" target='_blank' rel="noopener noreferrer" className='bg-banner-link'>
                        <p>Click here for Resume</p>
                    </a>
                </div>
            </div>
        </div>
                </section>
                {/* <section>
                    <Tree/>
                </section> */}
        </div>
    );
}
export default Home;