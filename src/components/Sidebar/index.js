import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j2.png'
import LogoName from '../../assets/images/logo-name2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faBars,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { Fragment } from 'react'
import { faFile } from '@fortawesome/free-solid-svg-icons'

let xeeShowHide = function () {
  let xeeNavBar = document.getElementById('xee-nav-bar')
  let xeeCloseButton = document.getElementById('xee-close-button')
  let xeeOp = document.getElementById('xee-op')
  xeeCloseButton.classList.toggle('xee-close-button')
  xeeNavBar.classList.toggle('xee-show-hide')
  xeeOp.classList.toggle('xee-op')
}

let xeeShowHide2 = function () {
  let xeeNavBar2 = document.getElementById('xee-nav-bar')
  let xeeCloseButton = document.getElementById('xee-close-button')
  let xeeOp = document.getElementById('xee-op')
  xeeNavBar2.classList.toggle('xee-show-hide')
  xeeCloseButton.classList.toggle('xee-close-button')
  xeeOp.classList.toggle('xee-op')
}
const Sidebar = () => (
  <Fragment>
    {/* toggle button */}
    <div
      className="xee-toggle-button"
      id="xee-close-button"
      onClick={xeeShowHide}
    >
      <Link className="xee-fa-bars" exact="true" to="#">
        <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
      </Link>
    </div>
    {/* navbar  */}
    <div className="nav-bar" id="xee-nav-bar" onClick={xeeShowHide2}>
      <Link className="logo" to="/">
        <img src={LogoJ} alt="Logo" />
        <img src={LogoName} alt="Juan" id="logo-name" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1CVht_N_aJp4Q1kdkAuusZ1VuhodQ77AuclwOkaSyAkI/edit?usp=sharing"
          >
            <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/juan-velasco-434369131/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JUANYE-ETH"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/164576541269819392"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@juanyevela"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  </Fragment>
)

export default Sidebar
