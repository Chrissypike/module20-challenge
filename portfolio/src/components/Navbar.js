import React from 'react';
import './style.css'

const styles = {
    navbarStyle: {
        backgroundColor: '#AE759F',
        margin: '0',
        padding: '0',
        fontFamily: 'Fontdinerdotcom Sparkly',
        color: '#FCDEBE',
        fontSize: '40px',
    },
    name: {
        
    },
    ulStyle: {
        display: 'inline-block',
        listStyle: 'none',
        margin: '0 10px',
        padding: '0',
        
        
    }
}

function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a style={styles.name}>Christine Pike</a>
        <ul>
        <li id='links' style={styles.ulStyle}><a href='#about'>About</a></li>
        <li id='links' style={styles.ulStyle}><a href='#portfolio'>Portfolio</a></li>
        <li id='links' style={styles.ulStyle}><a href='#contact'>Contact</a></li>
        <li id='links' style={styles.ulStyle}><a href='#resume'>Resume</a></li>
      </ul>
      </nav>
    );
  }

export default Navbar;