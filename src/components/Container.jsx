import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { useState } from 'react';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        switch (currentPage) {
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
        };
    }
    const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} changePage={changePage} />
            <main className="m-4">{renderPage()}</main>
            {/* <About />
        <Contact />
        <Portfolio />
        <Resume /> */}
        </div>
    );
}