function Projects(props) {
    return (
        <div className="row">
            {props.projects.map(project => (
                <div className="col-md-6 mt-4">
                    <h3 className="text-center emphasis" key={project.id}>{project.title}</h3>
                    <div className="image-container">
                        <img src={project.image} className="img-fluid" alt={project.alt}></img>
                        <div className="overlay-text">
                            <p><span className="emphasis">Description:</span> {project.description}</p>
                            <p><a className="emphasis" href={project.deployedLink} target='blank'>View the Project</a></p>
                            <p><a className="emphasis" href={project.repoLink} target='blank'>See the GitHub Repository</a></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Projects;

