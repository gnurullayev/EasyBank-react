/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.scss"
import logo from "../images/logo.svg"

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__inner">
                    <a className="header__logo logo" href="./index.html">
                        <img src={logo} alt=""/>
                    </a>

                    <nav className="header__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="./index.html" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Contact</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Blog</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Careers</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="header__invite-button invite-button" type="button">
                        <a className="invite-button__link" href="#">Request Invite</a>
                    </button>

                    <button className="menu" type="button">
                        <i className='bx bx-menu'></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;