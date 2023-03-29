import React from 'react'

const styles = {
    navbarStyle: {
        backgroundColor: '#AE759F',
        textAlign: 'center',
        lineHeight: '1.5',
        padding: '20px',
        margin: '0',
    },
    aboutme: {
        fontFamily: 'Fontdinerdotcom Sparkly',
    }
}

function About() {
    return (
        <div style={styles.navbarStyle} id='about'>
            <h1 style={styles.aboutme}>About Me</h1>
            <p>Hi! My name is Christine Pike, though, I prefer the name Chrissy. I am a full stack web developer with a background in customer service and sales. I am currently enrolled at the University of Texas’s Full Stack Web Development Bootcamp and looking for a full time position as a web developer.</p>
        </div>
    );
}

export default About;