import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <header className="site-header">
            <nav className="nav">
                <IndexLink to="/" className="nav__link" activeClassName="nav__link--active">Home</IndexLink>
                <Link to="/locations" className="nav__link" activeClassName="nav__link--active">Locations</Link>
            </nav>
        </header>
    );
};

export default Header;