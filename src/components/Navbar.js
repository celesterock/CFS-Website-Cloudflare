import React, { useState, useEffect } from 'react';
import Logo from "../assets/goldlogo.png";
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    // Close menu when re-sizing back to bigger screen
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 600) {
                // close the menu when maximizing
                setOpenLinks(false); 
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div className = "navbar">
        <div className = "leftSide" id={openLinks ? "open" : "close"}>
            <Link to="/">
                <img src={Logo} alt= "Logo" className="logo" />
            </Link>
            <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/About"> About </Link>
                <Link to="/Contact"> Contact </Link>
            </div>
        </div>
        <div className = "rightSide">
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Contact"> Contact </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>

        </div>
    </div>
  )
}

export default Navbar
