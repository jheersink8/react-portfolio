import TimelineEvents from "../TimelineEvents";

export default function About() {

    const timelineEvents = [{
        id: 1,
        date: '2010',
        description: 'Married the Best Person on Planet Earth'
    },
    {
        id: 2,
        date: '2014',
        description: 'Graduated with a BS in Information Systems Management'
    },
    {
        id: 3,
        date: '2015',
        description: 'Entered the IT Field as an Assistant Vice President of Technical Support'
    },
    {
        id: 4,
        date: '2017',
        description: 'Obtained my MBA with an Emphasis in Leadership'
    },
    {
        id: 5,
        date: '2023',
        description: 'My Wife and I had a Baby Boy'
    },
    {
        id: 6,
        date: '2023',
        description: 'Entered a Full Stack Web Development Bootcamp'
    },
    {
        id: 7,
        date: '2024',
        description: 'Completed Web Development Bootcamp Certificate'
    }
    ];


    return (



        <div>
            <div className="container">
                <div className="row py-3">

                    <div className="col-md-7 order-md-2 pb-3 order-1">
                        <h3 className="fade-in1">Hello. My name is <span className="emphasis">Jordan Heersink</span>. Thank you so much for visiting my site! Please <span className="emphasis">scroll down</span> to learn more about me, and use the <span className="emphasis">navigation buttons</span> for more of my web development resources. </h3>
                    </div>

                    <div className="col-md-5 align-content-center text-center order-md-1 order-2">
                        <img
                            src='src\assets\headshot.PNG'
                            alt='Jordan Heersink headshot'
                            title='I recently shaved off my fro  :( '
                            width='70%'
                            height='70%'
                            className="img-fluid rounded border fade-in2"
                        />
                    </div>


                </div>
            </div>

            <div className="container emphasis">
                <h3>Who I am:</h3>
                
                <p className="px-3">I am a full-stack web developer seeking to apply my <span className="emphasis">eight years</span> of tech support management expertise to the web. After spending time learning how end users think and knowing what they look for, I want to hone my web development skills into creating a user experience that aligns with <span className="emphasis">their wants and needs</span>. I am enthusiastic about technology and always eager to learn more. I have a BA in <span className="emphasis">Information Systems Management</span>, a master's degree in <span className="emphasis">Business Administration</span>, and I recently acquired a web development <span className="emphasis">certificate</span> through a rigorous course at Denver University. I'm looking to bring my commitment to <span className="emphasis">excellence</span> and <span className="emphasis">hard work</span> to a company and become a valuable asset.
                </p>
            </div>

            <div className="timeline">
                <h3>My Milestones:</h3>
                <TimelineEvents timelineEvents={timelineEvents} />
            </div>



            <h3>My Skills:</h3>
            <p>These are some of the items in my toolbelt.</p>
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

            <h3>What's Next for Me:</h3>
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
    )
}