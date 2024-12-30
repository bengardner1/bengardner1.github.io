import projects from './projects.json';
import './index.css';
import { FaGithub, FaLock } from "react-icons/fa";

function Projects() {
    return (
        <div>
            <div className='bg-title'>
                <h1>Personal Projects</h1>
                <p>To view a private (<FaLock size={20} className='pb-1'/>) repo, please contact me at <a href='mailto:bengardner433@gmail.com'>bengardner433@gmail.com</a>.</p>
            </div>
            <div className='d-flex flex-row flex-wrap'>
                {projects.sort((a, b) => new Date(b.date) - new Date(a.date)).map((project, index) => (
                    <div key={index} className='col-lg-6 col-md-12 mb-3'>
                    <div className='card bg-card'>
                        <div className="card-body d-flex flex-column align-items-center">
                            <div>
                                <h2 className="d-inline">{project.name}</h2>
                                {project.git_link === "private" ? <FaLock size={40} className='pb-3'/> : <a href={project.git_link} target='_blank'><FaGithub size={40} className='pb-3'color='black'/></a>}    
                        </div>
                        <p>{project.description}</p>
                        <img src={project.image_path} alt={project.name} className='bg-project-image'/>
                        </div>
                    </div>
                    </div>
                ))}
                </div>       
        </div>
    );
}
export default Projects;