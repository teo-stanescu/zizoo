import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h2>Zizoo</h2>
            </Link>
        </div>
    );
};

export default Header;