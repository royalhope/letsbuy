import React from 'react';
import './About.css';
import CreatorPic from './creator-pic.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core'
import GmailIcon from './gmail-new-logo.png'

function About() {
    const styles = {
        largeIcon: {
          width: 60,
          height: 60,
        },
    };  

    return (
        <div style={{textAlign: 'center'}} className="about">
            <h1>About the Creator</h1>

            <br />

            <div className="about__info">
                <img src={CreatorPic} alt="LetsBuy Creator's pic"/>
                <br />
                <br />
                <p>
                    Meet Umang Shahi, the creator of LetsBuy, he uses mulitple programming languages while coding, 
                    <br />
                    like ReactJS, Redux, CSS, HTML and Firebase.
                </p>
            </div>

            <br />

            <div className="about__social">
                <h3>Connect with him online:</h3>
                <div className="about__socialIcons">
                    <IconButton iconStyle={styles.largeIcon}>
                        <a href="https://www.linkedin.com/in/umang-shahi-2376b51ab/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="linkedin" />
                        </a>
                    </IconButton>
                    &nbsp; &nbsp;
                    <IconButton>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:umang.u.shahi10@gmail.com?subject=Something related to LetsBuy 🛒">
                            <img src={GmailIcon} className="email" alt='' />
                        </a>
                    </IconButton>
                    &nbsp; &nbsp;
                    <IconButton iconStyle={styles.largeIcon}>
                        <a href="https://github.com/royalhope" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="github" />
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default About
