import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
// import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_udl7sbl',
  //       'template_8a8ws4v',
  //       refForm.current,
  //       '-I4SjcEUp7wynhuSq'
  //     )
  //     .then(
  //       () => {
  //         alert('Message successfully sent!')
  //         window.location.reload(false)
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again')
  //       }
  //     )
  // }

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
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have other requests or questions,
            please don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form
              name="contact v2"
              method="post"
              data-netlify="true"
              onSubmit="submit"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact v2" />

              <div hidden>
                <input name="bot-field" />
              </div>

              <div>
                <label>
                  First name
                  <br />
                  <input type="text" name="first-name" />
                </label>
              </div>

              <div>
                <label>
                  Last name
                  <br />
                  <input type="text" name="last-name" />
                </label>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input id="email" type="email" name="email" />
              </div>

              <div>
                <label>
                  Any Comments?
                  <br />
                  <textarea name="comments"></textarea>
                </label>
              </div>

              <button type="submit">Submit The Results</button>
            </form>
          </div>
        </div>
        <div className="xee-container">
          <div className="info-map">
            Juan Velasco,
            <br />
            United States of America,
            <br />
            Tampa,FL
            <br />
            <span>juanyevela@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[27.964157, -82.452606]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[27.964157, -82.452606]}>
                <Popup>Juan lives here, come over for a cup of coffee :)</Popup>
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
