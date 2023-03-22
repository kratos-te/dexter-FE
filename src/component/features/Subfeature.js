import React from 'react'
import './features.css'
import ParticleCreator from '../Particles/ParticleCreator'

const Subfeature = () => {
  return (
    <>
      <div className='features-page-first-row'>
      <ParticleCreator />
        {' '}
        <div className='container'>
          <div className='row g-0'>
            <div className='col-md-6 g-0'>
              <div className='left'>
                {/* <h1>
                  Astra <span>.</span>
                </h1> */}
                <img
                  src='https://i.imgur.com/sBoEolL.png'
                  alt=''
                  className='imageFeature'
                />
                <h2>
                  World className Automated & <br /> Algorthmic trading
                </h2>
                <p style={{ fontSize: '16px' }}>
                  Predictive analytics by combining highly sophisticated
                  statistical and mathematical <br />
                  modeling to determine price action trends and patterns
                </p>
              </div>
            </div>
            <div className='col-md-6 g-0'>
              <div className='right'>
                <img src='https://i.imgur.com/JT5e9VK.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subfeature
