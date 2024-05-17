
// Portfolio navbar with links to About Me, Portfolio, Contact, and Resume
function Navbar({ currentPage, changePage }) {
    return (
        <>

            <ul className='p-1 nav nav-pills nav-fill'>
                <li className='nav-item brand'> Jordan Heersink </li>
                <li className='nav-item'>
                    <a href='#about' onClick={() => changePage('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='#portfolio' onClick={() => changePage('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='#contact' onClick={() => changePage('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </a>
                </li>

                <li className='nav-item'>
                    <a href='#resume' onClick={() => changePage('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
                </li>

            </ul>
        </>
    )
}

export default Navbar