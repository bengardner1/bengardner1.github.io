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
                {projects.map((project) => (
                    <div className='card bg-card'>
                        <div class="card-body">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        </div>
                    </div>
                ))}
                </div>
                
        </div>
    );
}
export default Projects;