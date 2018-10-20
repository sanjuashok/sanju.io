import React, {Component} from 'react';
import './styles/Intro.css';
import email_svg from '../static/images/baseline-email-24px.svg';
import vmail_svg from '../static/images/baseline-voicemail-24px.svg';

class Intro extends Component {
    render() {
        return(
            <div className="Intro">
                <div className="nameContainer">
                    <p className="name">sanju ashok</p>
                    <div className="contact">
                        <a className="email link" href="mailto:me@sanju.io">
                            <img className="email_svg" src={email_svg} alt="email me."/>
                        </a>
                        <img className="vmail_svg link" src={vmail_svg} alt="voicemail me - coming soon."/>
                    </div>
                </div>
                <div className="intro-text">
                    <p className="inner-text">
                        Hi, I'm Sanju. Currently, I'm taking some time off
                        from working. In the meantime, I'm writing a weekly newsletter
                        about cooking. I've been trying to lose weight for some
                        time - you can see how it's going here. I'm also
                        learning how to build apps using react and react-native.
                        You can view the general portfolio here, and the code
                        over at github.
                        <br/>
                        <br/>
                        I also write here on occasion.
                    </p>
                </div>
            </div>
        )
    }
}

export default Intro;
