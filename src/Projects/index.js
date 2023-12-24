import projects from './projects.json';
import './index.css';

function Projects() {
    return (
        <div>
            <div className='bg-title'>
                <h1>Projects</h1>
                <p>All Git Repos available upon request email bengardner433@gmail.com</p>
            </div>
            <div className='d-flex flex-row flex-wrap'>
                {projects.sort((a, b) => new Date(b.date) - new Date(a.date)).map((project, index) => (
                    <div key={index} className='col-lg-6 col-md-12 mb-3'>
                    <div className='card bg-card'>
                        <div className="card-body">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <img src={project.image_path} alt={project.name}/>
                        </div>
                    </div>
                    </div>
                ))}
                </div>       
        </div>
    );
}
export default Projects;