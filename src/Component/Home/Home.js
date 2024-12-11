import React, { useState, useEffect } from 'react';
import logo from "../../assets/Home/fbtBluelogo.png"
import compass from "../../assets/Home/compass1.png"
import compass2 from "../../assets/Home/compass2.png"
import headertext from "../../assets/Home/HeaderText.png"
import WhoWeare from "../../assets/Home/Maskgroup1.png"
import ourpride from "../../assets/Home/Maskgroup2.png"
import OurPledge from "../../assets/Home/OurPledge.png"
import value from "../../assets/Home/value.png"
import first from "../../assets/Home/1st.png"
import sec from "../../assets/Home/2nd.png"
import third from "../../assets/Home/3rd.png"
import forth from "../../assets/Home/4th.png"
import fifth from "../../assets/Home/5th.png"
import plane from "../../assets/Home/animatedplane.png"
import "./home.css"
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header';
const Home = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowHeader(true); // Show the header when scrolled down
            } else {
                setShowHeader(false); // Hide the header when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='homecontainer w-[100%] bg-[#F3F3F3] relative'>
            <img className='compass absolute w-[250px] h-[450px] top-[1%] left-[-10px]' src={compass} alt='compass' />
            <div className='upsideheader py-[1%] pl-[16%] pr-[14%]'>
                {!showHeader && (
                    <div>
                        <div className='insideheader flex items-center justify-between'>
                            <NavLink to="/aboutus" className='btn1 py-[0.5%] px-[1.8%] text-[15px] text-[#000] font-[500] border-2 border-[#292b5b] rounded cursor-pointer transition-all duration-[0.2s] decoration-0 hover:bg-[#292b5b] hover:text-[#fff]'>About Us</NavLink>
                            <img src={logo} alt='logo' style={{ width: "180px", height: "70px" }} />
                            <NavLink to="/product" className='btn1 py-[0.5%] px-[1.8%] text-[15px] text-[#000] font-[500] border-2 border-[#292b5b] rounded cursor-pointer transition-all duration-[0.2s] decoration-0 hover:bg-[#292b5b] hover:text-[#fff]'>Our Product</NavLink>
                        </div>
                        <div className='lists flex justify-center items-center ml-[6.5%]'>
                            <NavLink className="decoration-0 text-[15px] cursor-pointer text-[#000] font-[500] mr-[8%] transition-all duration-[0.3s] mt-[1.5%] mb-[1%] hover:text-[#292b5b] hover:scale-[1.1]" to="/careers">Careers</NavLink>
                            <NavLink className="decoration-0 text-[15px] cursor-pointer text-[#000] font-[500] mr-[8%] transition-all duration-[0.3s] mt-[1.5%] mb-[1%] hover:text-[#292b5b] hover:scale-[1.1]" to="/events">Events</NavLink>
                            <NavLink className="decoration-0 text-[15px] cursor-pointer text-[#000] font-[500] mr-[8%] transition-all duration-[0.3s] mt-[1.5%] mb-[1%] hover:text-[#292b5b] hover:scale-[1.1]" to="/csrpage">CSR</NavLink>
                            <NavLink className="decoration-0 text-[15px] cursor-pointer text-[#000] font-[500] mr-[8%] transition-all duration-[0.3s] mt-[1.5%] mb-[1%] hover:text-[#292b5b] hover:scale-[1.1]" to="/contactus">Contacts</NavLink>
                        </div>
                    </div>
                )}
                {/* Sticky Header visible on scroll */}
                {showHeader && <Header />}
                <div className='headertext flex items-center justify-center ml-[-12%] relative'>
                    <img className='plane absolute top-0 w-[8%] h-[48px]' src={plane} alt='plane' />
                    <img className='choosemore w-[55%] h-[30%]' src={headertext} alt='headertext' />
                </div>
            </div>
            <div className='whoweare py-[1%] pl-[16%] pr-[14%] relative text-center '>
                <img className='compass2nd absolute w-[220px] h-[450px] right-0 top-[-15px]' src={compass2} alt='compass' />
                <h2 className='inline-block pb-[10px] text-[#000] font-[700] relative'>Who<span> We are </span></h2>
                <div className='inside_whoweare flex justify-between items-center mt-[3%]'>
                    <img src={WhoWeare} style={{ width: "450px", marginRight: "8%" }} alt='WhoWeare' />
                    <div>
                        <p className='text-right font-[500] leading-6'>FBT ADVENTURES is the leading online travel content aggregator and  innovator of Direct Connect distribution solutions. FBT ADVENTURES  operates the world’s largest Direct Connect distribution and payment  platform, directly linking hundreds of travel suppliers to Online Travel Agencies, Online (Corporate) Booking Tools, Travel Search and Mobile  services.  FBT team itself a bunch of passionate Travellers who started  this one unified aim, which is to make travelling easy for worldwide.</p>
                    </div>
                </div>
            </div>
            <div className="ourpride">
                <img className="compass3 absolute left-[-10px] w-[250px] h-[450px] top-0" src={compass} alt="compass" />
                <h2>
                    What We<span> Pride Ourselves On</span>
                </h2>
                <div className="content-section">
                    <div className='inside-content'>
                        <p className="description">
                            FBT Adventures, established in 2018 in New Delhi, pioneered a low-cost Direct Connect model, enabling suppliers to connect directly with online travel agencies. They offer services like air, hotel, bus, travel insurance, visa, and holiday bookings.
                        </p>
                        <div className="text-content">
                            <div className='inside-text'>
                                <div className='firth'>
                                    <div className='dot'></div>
                                    <h3>Desktop Solutions</h3>
                                    <p className='same'>
                                        Provides enterprise tools to provide a seamless way for agents to shop and book web content directly.
                                    </p>
                                </div>
                                <div className='secth'>
                                    <div className='dot2nd'></div>
                                    <h3>IBE B2B and B2C Portals</h3>
                                    <p className='same'>
                                        Our IBE B2B and B2C portals equip agents with the necessary tools to manage reservations and customer support. Core GDS for Flights, LCCs, Bus, and Hotel Consolidators from a single system.
                                    </p>
                                </div>
                                <div className='thth'>
                                    <div className='dot3nd'></div>
                                    <h3>FBT Pay</h3>
                                    <p className='same'>
                                        FBT Pay which has redefined the way 3rd parties can pay and settle on a worldwide and consistent basis using their home currencies.
                                    </p>
                                </div>
                                <div className='forthh'>
                                    <div className='dot4nd'></div>
                                    <h3>FBT ADVENTURES</h3>
                                    <p className='same'>
                                        FBT ADVENTURES today aggregates 220+ low cost carriers (LCCs), Full Service Carriers (FSCs), Now its offers the most comprehensive solution for suppliers and agents/meta-search to shop, quote and book in any currency while FBT Adventures settles directly with the suppliers in their billing currencies.
                                    </p>
                                </div>
                            </div>
                            <p className='yealghai'>Our company became the preferred choice of customers Rapidly, Our company rise has been lead by the vision and the spirit of each one of its employees, for whom no idea was too big and no problem too difficult. With untiring innovation and determination, adding a variety of online and offline products and services.</p>
                        </div>
                    </div>
                    <img className="whoWeAreImage" src={ourpride} alt="Who We Are" />
                </div>
            </div>
            <div className='outpledge'>
                <img className='compass4nd absolute w-[220px] h-[450px] right-0 top-[30%]' src={compass2} alt='compass' />
                <div className='insidepledge'>
                    <p className='lowcost'>Low Cost Business Models</p>
                    <p className='direct'>Direct Access to Airlines,<br /> Bus and Hotel Supplier,<br /> Umrah, Visa, Holiday</p>
                    <p className='post'>Comprehensive Post-<br />Booking Support and<br /> Reporting Tools</p>
                    <p className='quality'>Supreme Quality<br /> and Reliable<br /> Service via our <br /> 24/7 global<br /> operations from<br /> our Delhi offices</p>
                    <p className='solution'>Innovative payment and <br /> settlement solutions</p>
                    <img className="pledge" src={OurPledge} alt='OurPledge' />
                </div>
            </div>
            <div className='ourhonour'>
                <img className='compass5 absolute w-[250px] h-[450px] top-[15%] left-[-10px]' src={compass} alt='compass' />
                <h2>Our<span> Honour </span></h2>
                <div className="honour-grid">
                    <div className="honour-card">
                        <h3>7k+</h3>
                        <p>Travel Agent</p>
                    </div>
                    <div className="honour-card">
                        <h3>600K+</h3>
                        <p>Hotels Worldwide</p>
                    </div>
                    <div className="honour-card">
                        <h3>50+</h3>
                        <p>Countries</p>
                    </div>
                    <div className="honour-card">
                        <h3>17.5k+</h3>
                        <p>Holiday Packages</p>
                    </div>
                    <div className="honour-card">
                        <h3>100+</h3>
                        <p>White Label/API</p>
                    </div>
                </div>
            </div>
            <div className='ourvalue'>
                <img className='compass6nd absolute w-[220px] h-[450px] right-0 top-[60%]' src={compass2} alt='compass' />
                <div className='insidevalue'>
                    <img src={value} alt='value' />
                </div>
            </div>
            <div className='ourachiv'>
                <h2>Our<span> Achievements </span></h2>
                <div className='inside-achiv'>
                    <img className='firstimg' src={first} alt='first' />
                    <img className='firstimg' src={sec} alt='sec' />
                    <img className='firstimg' src={third} alt='third' />
                    <img className='forthimg' src={forth} alt='forth' />
                    <img className='fifthimg' src={fifth} alt='fifth' />
                </div>
            </div>
        </div>
    )
}

export default Home
