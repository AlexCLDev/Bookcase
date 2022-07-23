import React from 'react'
import Error404 from '../../Media/404.svg'
import { Home } from '../Home/Home'
import './index.css'

export const Error = () => {
    return (
        <div className="error">
            <div className='center'>
                <img src={Error404} />
                <p>Page not Found</p>
                <button>HOME</button>
            </div>
        </div>
    )
}
