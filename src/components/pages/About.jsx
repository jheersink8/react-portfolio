import TimelineEvents from "../TimelineEvents";
import "./About.css";
import timelineEvents from "../tools/TimelineEvents";

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
                <p className="common">These are some of the items in my toolbelt.</p>
                <ul>
                    <li>Git</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Web Services APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
            </div>

            <div className="container emphasis py-5 my-4 border-top">
                <h3 className="about-header">What's Next for Me:</h3>
                <p>These are some of the things I want to learn next.</p>
                <ul>
                    <li>Programming Languages</li>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>TypeScript</li>
                    </ul>
                    <li>Libraries & Frameworks</li>
                    <ul>
                        <li>D3</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                    <li>Tools & Platforms</li>
                    <ul>
                        <li>AWS</li>
                        <li>GraphQL Playground</li>
                        <li>Docker</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}