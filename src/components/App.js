import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
    render() {
        return(
            <div className="page">
                <header className="header">
                    <nav className="nav">
                        <IndexLink to="/">Home</IndexLink>
                        <Link to="/about">About</Link>
                    </nav>
                </header>

                <main>
                    {this.props.children}
                </main>

            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;