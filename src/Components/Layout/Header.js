import React from 'react'
import './index.scss'
import LogoS from '../../assets/images/logob.png'
import LogoSubtitle from '../../assets/images/logob_sub.png'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFileAlt, faBriefcase, faCog } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="alexcldev" />
            </Link>
            <nav>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/home"
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"    
                    className="recent-link"
                    to="/rfiles"
                >
                    <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
                </NavLink>


                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="workspace-link"
                    to="/workspace"
                >
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>



                <hr />
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="user-link"
                    to="/account"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <NavLink    
                        to="/config"
                        activeclassname="active">
                        <FontAwesomeIcon icon={faCog} color="4d4d4e" />
                    </NavLink>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/AlexCLDev'>
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='wa.link/zwiqoi'>
                        <FontAwesomeIcon icon={faWhatsapp} color="4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
