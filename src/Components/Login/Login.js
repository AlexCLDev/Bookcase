import React, { useEffect } from 'react'
import logo from '../../Media/bookw.svg';
import './index.scss'
import register from '../../Media/recorder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

export const Login = () => {

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, [])


  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">O inicia con tus redes sociales</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"><FontAwesomeIcon icon={faGoogle} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                </a>
              </div>
            </form>
            <form action="/" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p class="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"><FontAwesomeIcon icon={faGoogle} /></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Nuevo por aqui?</h3>
              <p>
                Registrate para que puedas guardar tus documentos, audios y mucho mas.
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Ya eres uno de nosotros?</h3>
              <p>
                Inicia sesion ahora para que puedas acceder a tus documentos y audios guardados.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={register} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
