import React, { useState } from 'react';
import "./product.css";
import compass from "../../assets/Home/compass1.png";
import Header from '../Header/Header';
import LeftSide from "../../assets/Product/LeftLine.png";
import RightSide from "../../assets/Product/RightLine.png";
import flybird from "../../assets/Product/flybirdtredmark.png";
import blueflybird from "../../assets/Product/flybirdtredmark2.png";

const Product = () => {
    const [animationStates, setAnimationStates] = useState([false, false, false]);
    const [expandedStates, setExpandedStates] = useState([false, false, false]);

    const handleClick = (index) => {
        setAnimationStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? true : state))
        );
    };

    const toggleExpand = (index) => {
        setExpandedStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    // Array to hold the data for each section
    const sections = [1, 2, 3];

    return (
        <div>
            <Header />
            <div className='producthai'>
                <div className='ourproductpart'>
                    <img className='productcom' src={compass} alt='compass' />
                    <h2>Our<span> Products </span></h2>
                    <div className='description-container'>
                        <img className='leftline' src={LeftSide} alt='LeftSide' />
                        <div className='product-description'>
                            <p>"Explore Our Travel Products; Your Gateway to Unforgettable Adventures"</p>
                            <p>Discover a carefully curated selection of travel essentials designed to enhance your journeys.</p>
                            <p>From innovative luggage solutions to travel accessories, we have everything you need for seamless travel</p>
                            <p>Our products are crafted with quality and durability in mind, ensuring they withstand the rigors of exploration.</p>
                            <p>Whether you're a seasoned traveler or planning your first adventure, we cater to all your travel needs.</p>
                            <p>Experience comfort, convenience, and style as you embark on your next getaway.</p>
                            <p>Let us be your trusted companion on every step of your travel journey!</p>
                        </div>
                        <img className='rightline' src={RightSide} alt='RightSide' />
                    </div>
                </div>

                <div className='anemationpart'>
                    {sections.map((section, index) => (
                        <div key={index} className='insideanemationpart'>
                            <div className="product-header">
                                <div className={`bluebox ${animationStates[index] ? 'animate' : ''}`}></div>

                                <img
                                    src={flybird}
                                    alt="Flybird Logo"
                                    className={`flybird-logo ${animationStates[index] ? 'hidden' : ''}`}
                                    onClick={() => handleClick(index)}
                                />

                                <img
                                    src={blueflybird}
                                    alt="Blue Flybird Logo"
                                    className={`flybird-logo ${animationStates[index] ? 'visible' : 'hidden'}`}
                                />

                                <div className="header-content">
                                    <h1 className={`main-title ${animationStates[index] ? 'red-title' : ''}`}>
                                        Exploring New Horizons
                                    </h1>
                                    <p className="sub-title">Your ultimate travel <br />guide</p>
                                </div>

                                <div className={`entersite ${animationStates[index] ? 'opa' : ''}`}>
                                    <p>Enter Site </p> <i className="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </div>

                            <i
                                className={`fa-solid ${expandedStates[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                                onClick={() => toggleExpand(index)}
                                style={{ cursor: 'pointer', fontSize: '18px' }}
                            ></i>

                            <div className={`hiddenthingh ${expandedStates[index] ? 'expanded' : ''}`}>
                                <p>
                                    FlyBird Tourism is India's No#1 online B2B travel consolidator company with integrated travel properties such as FBT API with the latest technology. (No. 1 hotels and leading air aggregator) FBT (31% stake in the leading B2B online travel platform). The company's mission is to organize the transportation and accommodation industry and connect it with the traveler. More than 3mm unique users transact with FBT properties every month, making FlyBird Tourism the biggest travel company in India! We offer all movement-related administrations to the clients, incorporating air ticketing, bus ticketing, lodging booking, holiday package, visa administrations, and international protection.
                                </p>
                                <h4>Top Features:</h4>
                                <div className='featurlist'>
                                    <ul className="features-list">
                                        <li>Free Cancellations on Flights</li>
                                        <li>Non-Stop Domestic Flights</li>
                                        <li>Quick & Easy Refund</li>
                                        <li>Inclusive Packages for Worldwide</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li>Owns Hotels Stay Club Program</li>
                                        <li>Accessibility Management</li>
                                        <li>Web Advance Technology</li>
                                        <li>+120 Premium City Tours</li>
                                    </ul>
                                    <ul className="features-list">
                                        <li>95%+ Positive Reviews</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
