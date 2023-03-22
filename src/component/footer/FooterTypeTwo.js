import React from 'react'
import './footer.css'

export default function FooterTypeTwo() {
    return (
        <div className='footer'>
            <section className='row-one-footer'>
                <div className='row-one-footer-col-one'>
                    <img src='https://i.imgur.com/wsEjtG3.png' alt='' />
                </div>
                <div className='row-two-footer-col-one'>
                    <span className='text-row-two-footer-col-one-one'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    <span className='text-row-two-footer-col-one-two'>also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
                <div className='row-three-footer-col-one'>
                    <span className='row-three-footer-col-one-title'>Platform</span>
                    <span className='row-three-footer-col-one-description' id='row-three-footer-col-one-description-one'>Features</span>
                    <span className='row-three-footer-col-one-description'>Pricing</span>
                    <span className='row-three-footer-col-one-title' id='row-three-footer-col-one-title-one'>Company</span>
                    <span className='row-three-footer-col-one-description' id='row-three-footer-col-one-description-one'>About us</span>
                    <span className='row-three-footer-col-one-description'>Contact us</span>
                    <span className='row-three-footer-col-one-title' id='row-three-footer-col-one-description-one'>Help</span>
                </div>
                <div className='row-four-footer-col-one'>
                    <span className='row-four-footer-col-one-title'>FAQs</span>
                    <span className='row-four-footer-col-one-description'>Support</span>
                    <span className='row-four-footer-col-one-title' id='row-three-footer-col-one-title-one'>Socials</span>
                    <span className='row-four-footer-col-one-description' id='row-three-footer-col-one-description-one'>Discord</span>
                    <span className='row-four-footer-col-one-description'>Twitter</span>
                </div>
            </section>
            {/* <section className='row-two-footer'>
                <img src='https://i.imgur.com/AMYLcVL.png' alt='' className='footer-image-bottom'/>
                <div className='row-privacy'>
                   <span className='privacy-button-row'>Privacy policy</span>
                   <span className='privacy-button-row'>Terms of Service </span>
                   <span className='privacy-button-row'>FAQ </span>
                   <span className='privacy-button-row'>Release Notes </span>
                </div>
            </section> */}
        </div>
    )
}
