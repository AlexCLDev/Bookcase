import React from "react";
import { Footer } from "../Layout/Footer";
import { Header } from "../Layout/Header";
import "./index.scss";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileAlt,
  faFileImport,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <div className="home">
      <section className="contenth">
        <div className="button">
          <a>
            <FontAwesomeIcon icon={faPlus} color="#4d4d4e" />
            <strong>New Project</strong>
          </a>
        </div>
        <div className="button">
          <a>
            <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
            <strong>Open File</strong>
          </a>
        </div>
        <div className="button">
          <a>
            <FontAwesomeIcon icon={faFileImport} color="#4d4d4e" />
            <strong>Import</strong>
          </a>
        </div>
      </section>
      <h1>Recent Files</h1>
      <section className="contenth">
        <div className="items">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </div>
        <div className="items">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </div>
        <div className="items">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </div>
        <div className="items">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </div>
      </section>

      <h1>Library</h1>
      <section className="contenth">
        <article className="items2">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </article>
        <article className="items2">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </article>
        <article className="items2">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </article>
        <article className="items2">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </article>
        <article className="items2">
          <a>
            <FontAwesomeIcon icon={faMusic} color="#4d4d4e" />
          </a>
          <p>Note</p>
        </article>
      </section>
    </div>
  );
};
