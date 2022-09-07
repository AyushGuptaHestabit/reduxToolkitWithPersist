import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'darkslategray'
            }}
        >
            <Link to='/' className="navLink"><h1>Fashion Zone</h1></Link>
            <div style={{
                marginRight: "15px"
            }}>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart ({items.length})
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
