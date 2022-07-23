import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'

export const Coheader = () => {
    return (
        <div className='coheader'>
            <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </div >
    )
}
