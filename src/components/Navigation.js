import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/portfolio" exact className="hover" activeClassName="nav-active">
                    <li>acceuil</li>
                </NavLink>
                <li className="nav-portfolio">portfolio
                <ul className="nav-projects">
                    <NavLink to="/portfolio/project-1" activeClassName="nav-active" className="hover">
                        <li>projet 1</li>
                    </NavLink>
                    <NavLink to="/portfolio/project-2" activeClassName="nav-active" className="hover">
                        <li>projet 2</li>
                    </NavLink>
                    <NavLink to="/portfolio/project-3" activeClassName="nav-active" className="hover">
                        <li>projet 3</li>
                    </NavLink>
                    <NavLink to="/portfolio/project-4" activeClassName="nav-active" className="hover">
                        <li>projet 4</li>
                    </NavLink>
                </ul>
                </li>
                <NavLink to="/portfolio/contact" exact className="hover" activeClassName="nav-active">
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;