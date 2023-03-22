import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import './particle.css'

const ParticleCreator = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  const option = {
    particles: {
      number: {
        value: 150,

        density: {
          enable: true,
          value_area: 700
        }
      }
    }
  }

  return (
    <Particles
      // width={'100px'}
      // height={'200px'}
      // params={option}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top:'0',
        left:'0',
        margin:'0',
        // padding:'0'
      }}
      // className='particles-wrapper'
      // id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            // value: "rgba(77, 77, 86, 0.3)",
          }
        },
        fullScreen: {
          enable: false
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },

          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
        // fullScreen: false,
      }}
    />
  )
}
export default ParticleCreator
