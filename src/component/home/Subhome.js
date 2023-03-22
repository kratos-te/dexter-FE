import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import ParticleCreator from '../Particles/ParticleCreator'


const Subhome = () => {
  const token = window.sessionStorage.getItem('token')

  return (
      <>
    <div className='home-hero-section'>
        <h1 className='animate__animated animate__fadeInLeft'>
          Results driven algorithmic
          <br /> trading software.
        </h1>
        {/* <div className="particlealigner"> */}
        <ParticleCreator/>
        {/* </div> */}
        <p
          style={{ fontSize: '16px' }}
          className='animate__animated animate__fadeInLeft'
        >
          Predictive analytics by combining highly sophisticated statistical and
          mathematical modeling to determine price action trends and patterns
        </p>
        {token == undefined ? (
          <Link to='/login'>
            <button className='animate__animated animate__fadeInLeft homeBtn'>
              Login
            </button>
          </Link>
        ) : null}
      </div>

      <div className='home-second-row-line'>
        <p
          style={{ fontSize: '16px' }}
          className='animate__animated animate__fadeInLeft'
        >
          DEXtre streamlines everything and every exchange into one place where
          you can take one look at your entire portfolio and trade with one
          simple click no matter where you are in the world.
        </p>
      </div>
        </>

  )
}

export default Subhome