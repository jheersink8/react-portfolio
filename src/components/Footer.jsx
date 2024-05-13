import { emailFooter, githubFooter, linkedinFooter } from './tools/icons.jsx';
export default function Footer() {

    return (

        <div className="container">

            <footer className="py-3 my-4 border-top">
                <ul className="nav justify-content-evenly pb-3 mb-3 nav-neg">

                    <li className="ms-3">
                        <a className="text-body-secondary" href="https://github.com/jheersink8/" target="_blank">
                            {githubFooter}
                        </a>

                    </li>

                    <li className="ms-3">
                        <a className="text-body-secondary" href="https://www.linkedin.com/in/jordan-heersink/" target="_blank">
                            {linkedinFooter}
                        </a>
                    </li>

                    <li className="ms-3">
                        <a className="text-body-secondary" href="mailto: jheersink8@gmail.com">
                            {emailFooter}
                        </a>
                    </li>
               
                </ul>
            </footer>
        </div>


    );
}