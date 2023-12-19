import projects from './projects.json';
function Projects() {
    return (
        <div>
            <h1>Projects</h1>
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