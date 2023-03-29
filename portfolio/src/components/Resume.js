import React from 'react';

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

function Resume() {
    return (
        <div id='resume' style={styles.navbarStyle}>
            <h1 style={styles.navbarStyle}>Resume</h1>
        </div>
    );
}

export default Resume;