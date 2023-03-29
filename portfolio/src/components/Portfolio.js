import React from 'react';


const styles = {
    navbarStyle: {
        backgroundColor: '#AE759F',
        padding: '20px',
        textAlign: 'center',
    },
    portfolio: {
        fontFamily: 'Fontdinerdotcom Sparkly',
    }
}

function Portfolio() {
    return (
        <div id='portfolio' style={styles.navbarStyle}>
            <h1 style={styles.portfolio}>Portfolio</h1>
        </div>
    );
}

export default Portfolio;