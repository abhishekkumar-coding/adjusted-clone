import React from 'react'
import "./careers.css"
import compass from "../../assets/Home/compass1.png"
import Maskgroup from "../../assets/About/Maskgroup.png"
import Header from '../Header/Header'
import compass2 from "../../assets/Home/compass2.png"
import LeftSide from "../../assets/Product/LeftLine.png"
import RightSide from "../../assets/Product/RightLine.png"

const Careers = () => {
    return (
        <div>
            <Header />
            <div className='careerspage'>
                <div className='careerspart'>
                    <img className='careerscom' src={compass} alt='compass' />
                    <div className='careersleftpart'>
                        <h1>Future with Us</h1>
                        <p>"Be Part of Our Growing Team"</p>
                    </div>
                    <div className='careersrightpart'>
                        <img className='maskgroup1' src={Maskgroup} alt='WhoWeare' />
                    </div>
                </div>
                <div className='careerlowerpart'>
                    <img className='leftlinecareers' src={LeftSide} alt='LeftSide' />
                    <div className='careersdescription'>
                        <p>At our company, we believe in turning passion into purpose, offering careers that are more than just jobs—they’re</p>
                        <p>journeys of discovery, growth, and adventure. We’re dedicated to building a team of enthusiastic explorers and </p>
                        <p>creative thinkers who are passionate about reshaping the travel experience. Here, your ideas and energy help bring</p>
                        <p>people closer to the world’s most unforgettable places. We encourage you to bring your unique perspective, </p>
                        <p>develop your skills, and be part of a collaborative team that values diversity and innovation. Join us to not only </p>
                        <p>advance your career but to inspire and elevate the way people experience the world.</p>
                        <p>clients alike, making travel seamless and enriching.</p>                    </div>
                    <img className='rightlinecareers' src={RightSide} alt='RightSide' />
                </div>
                <div className='positionopen'>
                <img className='positioncom2' src={compass2} alt='compass' />
                    <h2 className='position'>Our Positions Open</h2>
                    <div className="positions-list">
                        <div className="position-item">
                            <span className="position-title">Sales Executive</span>
                            <span className="position-type">Enduring role  <i class="fa-solid fa-circle-arrow-right"></i></span>
                        </div>
                        <div className="position-item">
                            <span className="position-title">Sales Operation Head</span>
                            <span className="position-type">Enduring role  <i class="fa-solid fa-circle-arrow-right"></i></span>
                        </div>
                        <div className="position-item">
                            <span className="position-title">Web Developer</span>
                            <span className="position-type">Enduring role  <i class="fa-solid fa-circle-arrow-right"></i></span>
                        </div>
                        <div className="position-item">
                            <span className="position-title">Human Resource Manager</span>
                            <span className="position-type">Enduring role  <i class="fa-solid fa-circle-arrow-right"></i></span>
                        </div>
                    </div>
                    <div className='getstarted'>
                        <h2 className='started'>Ready to get started?</h2>
                        <p>"Find Your Place on Our Team"</p>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
