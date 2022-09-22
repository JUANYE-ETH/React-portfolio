import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_udl7sbl',
        'template_8a8ws4v',
        refForm.current,
        '-I4SjcEUp7wynhuSq'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time, part-time and freelance opportunities
            - especially on ambitious or large projects. However, if you have
            other requests or questions, please don't hesitate to contact me
            using the form below.
          </p>
          <div className="contact-form">
            <form
              name="contact v1"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
              action="/contact"
            >
              <input type="hidden" name="form-name" value="contact v1" />
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <div class="field">
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <li>
                  <button type="submit" className="flat-button">
                    SEND
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="xee-container">
          <div className="info-map">
            Juan Velasco,
            <br />
            FL, USA,
            <br />
            <span>juanyevela@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[27.6648, -81.5158]} zoom={7}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[27.6648, -81.5158]}>
                <Popup></Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
