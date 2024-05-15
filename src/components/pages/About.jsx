import TimelineEvents from "../tools/TimelineEvents.jsx";
import "./About.css";
import timelineEvents from "../tools/TimelineEvents.js";
import { github, html, css, bootstrap, javascript, jQuery, webServicesAPIs, nodeJS, npm, postgreSQL, mongoDB, react } from "../tools/icons";


export default function About() {



    return (
        <div>
            <div className="container">
                <div className="row py-5">

                    <div className="col-md-7 order-md-2 pb-3 order-1 align-content-center">
                        <h2 className="fade-in1 intro">Hello. My name is <span className="emphasis">Jordan Heersink</span>. Thank you so much for visiting my site! Please <span className="emphasis">scroll down</span> to learn more about me, and use the <span className="emphasis">navigation buttons</span> to access more of my web development resources. </h2>
                    </div>

                    <div className="py-5 col-md-5 align-content-center text-center order-md-1 order-2">
                        <img
                            src='src\assets\headshot.PNG'
                            alt='Jordan Heersink headshot'
                            title='I recently shaved off my fro  :( '
                            width='60%'
                            height='70%'
                            className="img-fluid rounded border fade-in2"
                        />
                    </div>
                </div>
            </div>



            <div className="container emphasis py-5 my-4 border-top">
                <h3 className="about-header">Who I am:</h3>
                <p className="px-3 common">I am a full-stack web developer seeking to apply my <span className="emphasis">eight years</span> of tech support management expertise to the web. After spending time learning how end users think and knowing what they look for, I want to hone my web development skills into creating a user experience that aligns with <span className="emphasis">their wants and needs</span>. I am enthusiastic about technology and always eager to learn more. I have a BA in <span className="emphasis">Information Systems Management</span>, a master's degree in <span className="emphasis">Business Administration</span>, and I recently acquired a web development <span className="emphasis">certificate</span> through a rigorous course at Denver University. I'm looking to bring my commitment to <span className="emphasis">excellence</span> and <span className="emphasis">hard work</span> to a company and become a valuable asset.
                </p>
            </div>


            <div className="content ">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="card-body">
                                <h3 className="container emphasis py-5 my-4 border-top about-header">My Milestones:</h3>
                                <div id="content">
                                    <TimelineEvents timelineEvents={timelineEvents} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container emphasis py-5 my-4 border-top">
                <h3 className="about-header">My Skills:</h3>
                <p className="common px-3">These are some of the items in my toolbelt.</p>
                <div className="justify-content-center d-flex flex-wrap">
                    <div className="row">
                        <div className="col icon-list">{github}</div>
                        <div className="col icon-list">{html}</div>
                        <div className="col icon-list">{css}</div>
                        <div className="col icon-list">{bootstrap}</div>
                        <div className="col icon-list">{javascript}</div>
                        <div className="col icon-list">{jQuery}</div>
                    </div>
                    <div className="row">
                        <div className="col icon-list">{webServicesAPIs}</div>
                        <div className="col icon-list">{nodeJS}</div>
                        <div className="col icon-list">{npm}</div>
                        <div className="col icon-list">{postgreSQL}</div>
                        <div className="col icon-list">{mongoDB}</div>
                        <div className="col icon-list">{react}</div>
                    </div>
                </div>
            </div>

            <div className="container emphasis py-5 my-4 border-top">
                <h3 className="about-header">What's Next for Me:</h3>
                <p className="common px-3">These are some of the things I want to explorer next.</p>
                <br></br>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h4 className="future-title">Programming Languages</h4>
                        <ul className="future-list">
                            <li>C#</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="future-title">Libraries & Frameworks</h4>
                        <ul className="future-list">
                            <li>D3</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="future-title">Tools & Platforms</h4>
                        <ul className="future-list">
                            <li>AWS</li>
                            <li>GraphQL Playground</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}