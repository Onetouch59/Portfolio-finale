import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
       let NavLink = document.querySelectorAll('.social-network a');

       NavLink.forEach(link => {
        link.addEventListener('mouseover', (e) => {
           let attrX = e.offsetX - 20;
           let attrY = e.offsetY - 13;

           link.style.transform = `translate(${attrX}px, ${attrY}px)`;
       })
       link.addEventListener('mouseleave', () => {
           link.style.transform = '';
       })
       })
    }


    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://github.com/Onetouch59" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-github" ></i></li>
                </a>
                <a href="https://www.linkedin.com/in/adam-bederiat-1a4706210/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://www.instagram.com/adam.cod/?hl=fr" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;