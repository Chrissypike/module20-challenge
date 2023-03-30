import React from 'react';

const styles = {
    navbarStyle: {
        backgroundColor: '#AE759F',
        padding: '20px',
        textAlign: 'center',
    },
    Contact: {
        fontFamily: 'Fontdinerdotcom Sparkly',
    }
}

function Contact() {
    return (
        <div id='contact' style={styles.navbarStyle}>
            <h1 style={styles.Contact}>Contact</h1>
            <form>
                <label>Name:</label>
                <input
                    label='Name'
                    type='text'
                />
                <label>Email:</label>
                <input
                    label='Email'
                    type='text'
                />
                <label>Message:</label>
                <input
                    label='Message'
                    type='text'
                />
            </form>

        </div>
    );
}

export default Contact;