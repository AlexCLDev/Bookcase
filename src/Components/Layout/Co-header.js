import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import {
  faHome,
  faUser,
  faFileAlt,
  faBriefcase,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const Coheader = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="coheader">
        <Link
          to="#"
          onClick={() => {
            setShow(!show);
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>

      {show ? (
        <div className="menusesion">
          <nav>
            <NavLink exact="true" activeclassname="active" to="/account">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              className="login"
              to="/login"
            >
              <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              className="logout"
              to="/logout"
            >
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
          </nav>
        </div>
      ) : (
        <div className="opacity">
        </div>
      )}
    </>
  );
};
