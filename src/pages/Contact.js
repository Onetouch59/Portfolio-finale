import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from "framer-motion";

const Contact = () => {
    const variants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300,
        }
    }
    const transition = {
        ease: [.03,.87,.73,.9],
        duration: .6,
    }
    return (
        <main>
            <Mouse />
            <motion.div className ="contact" exit="out" animate ="in" inital="out" variants={variants} transition={transition}>
                <Navigation />
                <Logo />
                <ContactForm />
                {/* contact form */}
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue Felix trutat</p>
                            <p>21000 Dijon</p>
                        </div>
                    </div>
                
                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0766654836" className="hover">
                            <p style={{cursor: 'pointer'}} className="clipboard" onClick={() =>{
                                alert('téléphone copié !');
                            }}>07 66 65 48 36</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text="a.bederiat@codeur.online" className="hover">
                        <p style={{cursor: 'pointer'}} className="clipboard" onClick={() =>{
                                alert('email copié !');
                            }}>a.bederiat@codeur.online</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                <div className="credits">
                    <p>Adam.Corp - 2021</p>
                </div>
                </div>
                <ButtonsBottom left={'/portfolio/project-4'}/>
            </motion.div>
        </main>
    );
};

export default Contact;