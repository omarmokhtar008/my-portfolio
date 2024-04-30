import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])
  
    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_g70801v', 'template_a4ci9mf', form.current, '4Qbn-P3Gu3cGJE2IE','gmail' )
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
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
              />
          </h1>
          <p>
            I'm actively exploring opportunities to further develop my skills and contribute to meaningful projects in the field of front-end development. If you have any exciting projects or collaborations in mind, I'd be delighted to discuss them further. Feel free to get in touch using the form below. Looking forward to connecting and exploring potential opportunities together!
          </p>
          <div className='contact-form' >
            <form ref={form} onSubmit={sendEmail} >
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map-1'>
          Omar Mokhtar,
          <br />
          Egypt,
          <br />
          Alexandria
          <br />
          <span>frontendomar@gmail.com</span>
          <span>
          Flexibility is key! Whether it's collaborating with a team in-person or working remotely from anywhere in the world, I'm ready to adapt to the needs of your project. Let's discuss how we can work together to bring your ideas to life, regardless of location or setting.
          </span>
        </div>
        <div className='map-wrap' >
          <MapContainer center={[31.205753, 29.924526]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.205753, 29.924526]}>
              <Popup>Omar lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact