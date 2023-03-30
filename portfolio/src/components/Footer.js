import React from 'react';
import './style.css'

const styles = {
    navbarStyle: {
        backgroundColor: '#AE759F',
        padding: '20px',
        margin: '0',
        fontFamily: 'Fontdinerdotcom Sparkly',
        textAlign: 'center',
    },
    resume: {
        fontFamily: 'Fontdinerdotcom Sparkly',
    }
}

function Footer() {
    return (
        <div id='resume' style={styles.navbarStyle}>
            <h1 id='github' style={styles.navbarStyle}><a href='https://github.com/Chrissypike'>GitHub</a></h1>
        </div>
    );
}

export default Footer;