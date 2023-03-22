import React from 'react';
import './FooterTypeTwoMobile';
import './footer.css'
export default function FooterTypeTwoMobile() {
    return (
        <div className='footerTypeTwoMobile'>
            {/* <div className="imgctrl"> */}
            <img className="imgctrl"  src='https://i.imgur.com/wsEjtG3.png' alt='' />
            {/* </div> */}
            <div className="two-row-footerTypeTwoMobile">
                <div className="two-row-footerTypeTwoMobile-col-one">
                    <span className='row-three-footer-col-one-title-mob'>Platform</span>
                    <span className='row-three-footer-col-one-description-mob' id='row-three-footer-col-one-description-one'>Features</span>
                    <span className='row-three-footer-col-one-description-mob'>Pricing</span>
                    <span className='row-three-footer-col-one-title-mob' id='row-three-footer-col-one-title-one'>Company</span>
                    <span className='row-three-footer-col-one-description-mob' id='row-three-footer-col-one-description-one'>About us</span>
                    <span className='row-three-footer-col-one-description-mob'>Contact us</span>
                    <span className='row-three-footer-col-one-title-mob' id='row-three-footer-col-one-description-one'>Help</span>
                </div>
                <div className="two-row-footerTypeTwoMobile-col-one">
                    <span className='row-four-footer-col-one-title-mob'>FAQs</span>
                    <span className='row-four-footer-col-one-description-mob' style={{}}>Support</span>
                    <span className='row-four-footer-col-one-title-mob' id='row-three-footer-col-one-title-one'>Socials</span>
                    <span className='row-four-footer-col-one-description-mob' id='row-three-footer-col-one-description-one'>Discord</span>
                    <span className='row-four-footer-col-one-description-mob'>Twitter</span>
                </div>
                <div className="two-row-footerTypeTwoMobile-col-two">
                    <span className='text-row-two-footer-col-one-one-mob'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
                    <span className='text-row-two-footer-col-one-one-mob-see'>seee more..</span>
                </div>
            </div>
            <div className="image-row-mob">
                <img src='https://i.imgur.com/AMYLcVL.png' alt='' className='footer-image-bottom-mob' />
            </div>

            <div className="third-row-footerTypeTwoMobile">
                <span className='privacy-button-row-mobile'>Privacy policy</span>
                <span className='privacy-button-row-mobile'>Terms of Service </span>
                <span className='privacy-button-row-mobile'>FAQ </span>
                <span className='privacy-button-row-mobile'>Release Notes </span>
            </div>

        </div>
    )
}
