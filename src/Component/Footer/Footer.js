import React from 'react';
import './footer.css';
import whitelogo from '../../assets/Home/fbtwhitelogo.png';
import masklogo from '../../assets/Home/Maskgroup.png';
import flybirdTourismPDF from '../../assets/docs/flybird_tourism.pdf';

const Footer = () => {
    const handleFlybirdClick = (e) => {
        e.preventDefault();

        // Open the PDF in a new tab
        const newTab = window.open(flybirdTourismPDF, '_blank');

        // After opening in a new tab, trigger the download
        if (newTab) {
            newTab.onload = () => {
                // Create a download link and simulate a click
                const link = document.createElement('a');
                link.href = flybirdTourismPDF;
                link.download = 'Flybird_Tourism.pdf';
                link.click();
            };
        }
    };
    return (
        <div className="footer">
            <div className="footer-top">
                <h2>A Leading Destination Management Company</h2>
                <p>“Empowering Tourism, Delivering Outstanding Results”</p>
            </div>
            <hr />
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul className='com'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Events</li>
                        <li>CSR</li>
                        <li>Contacts</li>
                        <li>About us</li>
                        <li>
                            <a
                                href={flybirdTourismPDF}
                                onClick={handleFlybirdClick}
                                rel="noopener noreferrer"
                            >
                                Download Brochure
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Our Products</h3>
                    <ul className='pro'>
                        <li>
                            Flybird Tourism
                        </li>
                        <li>FBT Fanbox</li>
                        <li>FBT DMC</li>
                        <li>FBT Umrah</li>
                        <li>FBT Study Abroad</li>
                        <li>Techaag</li>
                        <li>Holiday 24/7</li>
                        <li>FBT Marine</li>
                        <li>FBT Academy</li>
                        <li>FBT B2B</li>
                        <li>Journey X</li>
                        <li>Milestone Travels</li>
                        <li>Travelvertex</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul className='legal'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Payment Terms</li>
                    </ul>
                </div>

                <div className="footer-column footer-logo-section">
                    <img src={whitelogo} alt="FBT Adventures Logo" className="footer-logo" />
                    <div className="social-icons">
                        <i class="fa-brands fa-facebook-f first"></i>
                        <i class="fa-brands fa-instagram second"></i>
                        <i class="fa-brands fa-x-twitter third"></i>
                        <i class="fa-brands fa-linkedin-in fourth"></i>
                    </div>
                </div>
                <div className='mask'>
                    <img src={masklogo} alt="Mask Logo" className="footer-masklogo" />
                    <span>+91-7388222244</span>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>Copyright © 2024 Techaag, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
