import './styles/Style.css';
import './pages/About.css';

import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import { useState } from 'react';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About Me');
// Switch statement to render the page based on the current page
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
// Main container for the app
    return (
        <div>
            <Navbar currentPage={currentPage} changePage={changePage} />
            <main className="m-4">{renderPage()}</main>
            <Footer />

        </div>
    );
}