import "./Portfolio.css";
import Projects from "../tools/Projects.jsx";
import projects from "../tools/Projects.js";

export default function Portfolio() {



    return (
        
        <div className="container">
        <h2 className="text-center mt-5 mb-4">Below are some projects I've built that I'm proud of! </h2>
            <Projects projects={projects} />
        </div>

    )
}