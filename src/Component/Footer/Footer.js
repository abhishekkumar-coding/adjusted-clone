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
        <div className="footer bg-[#1e2a4a] text-[#fff] py-[0.5%] px-[16%] text-center">
            <div className="footer-top ">
                <h2 className='text-[24px] font-bold my-4'>A Leading Destination Management Company</h2>
                <p className='text-[16px] text-[#fff] font-[400] mt-[-1.5%] '>“Empowering Tourism, Delivering Outstanding Results”</p>
            </div>
            <div className="footer-content my-10 flex justify-between flex-wrap relative">
                <div className="footer-column m-0 flex flex-col items-start">
                    <h3 className="text-[18px] mb-[10px] text-[#fff] font-bold text-left">Company</h3>
                    <ul className="list-disc list-inside text-[#fff] text-left space-y-2">
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
                                className="text-[#ffffff] hover:underline"
                            >
                                Download Brochure
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column m-0 flex flex-col items-start">
                    <h3 className="text-[18px] mb-[10px] text-[#fff] font-bold text-left">Our Products</h3>
                    <ul className="list-disc list-inside text-[#fff] text-left space-y-2">
                        <li className="text-[14px] cursor-pointer font-medium">Flybird Tourism</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT Fanbox</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT DMC</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT Umrah</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT Study Abroad</li>
                        <li className="text-[14px] cursor-pointer font-medium">Techaag</li>
                        <li className="text-[14px] cursor-pointer font-medium">Holiday 24/7</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT Marine</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT Academy</li>
                        <li className="text-[14px] cursor-pointer font-medium">FBT B2B</li>
                        <li className="text-[14px] cursor-pointer font-medium">Journey X</li>
                        <li className="text-[14px] cursor-pointer font-medium">Milestone Travels</li>
                        <li className="text-[14px] cursor-pointer font-medium">Travelvertex</li>
                    </ul>
                </div>


                <div className="footer-column m-0 flex flex-col items-start">
                    <h3 className="text-[18px] mb-[10px] text-[#fff] font-bold text-left">Legal</h3>
                    <ul className="list-disc list-inside text-[#fff] text-left space-y-2">
                        <li className="text-[14px] cursor-pointer font-medium">Terms & Conditions</li>
                        <li className="text-[14px] cursor-pointer font-medium">Privacy Policy</li>
                        <li className="text-[14px] cursor-pointer font-medium">Payment Terms</li>
                    </ul>
                </div>

                <div className="m-0 footer-logo-section flex flex-col items-center mt-[3%] ">
                    <img src={whitelogo} alt="FBT Adventures Logo" className="footer-logo w-[227px] mb-[10px] " />
                    <div className="social-icons flex gap-6 mt-4">
                        <i class="fa-brands fa-facebook-f first text-4xl cursor-pointer text-[#e6e6e6] hover:text-[#0084ff]"></i>
                        <i class="fa-brands fa-instagram second text-4xl cursor-pointer text-[#e6e6e6]"></i>
                        <i class="fa-brands fa-x-twitter third text-4xl cursor-pointer text-[#e6e6e6] hover:text-[#0084ff]"></i>
                        <i class="fa-brands fa-linkedin-in fourth text-4xl cursor-pointer text-[#e6e6e6] hover:text-[#0084ff]"></i>
                    </div>
                </div>
                <div className='mask absolute flex justify-center items-center bottom-0 mt-2 right-0'>
                    <img src={masklogo} alt="Mask Logo" className="footer-masklogo w-10 mr-[10px]" />
                    <span className='text-[14px] cursor-pointer transition-all duration-[2s]'>+91-7388222244</span>
                </div>
            </div>
            <hr />
            <div className="footer-bottom flex flex-col items-center my-4 mt-5">
                <p className='text-sm text-[#b8b8b8]'>Copyright © 2024 Techaag, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
