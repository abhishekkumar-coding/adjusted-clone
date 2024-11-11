import React, { useState, useEffect } from 'react';
import "./from.css"
import flag from "../../assets/Events/flagofindia.png";
import Registrationfromimg from "../../assets/Events/registerform.png"
const Registrationfrom = ({onClose}) => {
    useEffect(() => {
        // Disable body scroll when the component mounts
        document.body.style.overflow = "hidden";
        // Re-enable body scroll when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className='registrationform'>
            <img src={Registrationfromimg} alt='Registrationfromimg' className='imagehaibhai' />
            <div className='fromcontainer'>
                <button className="wishclose-btn" onClick={onClose}>&times;</button>
                <div className='puraformhai'>
                    <div className='form-header'>
                        <p className='form-title'>FBT Adventures Events</p>
                        <p className='registration'>Registration Form </p>
                    </div>

                    <div className='form-body'>
                        <div className='form-group-wish'>
                            <label className='form-label'>Enter your details <span>*</span></label>
                            <input
                                type='text'
                                placeholder='Name *'
                                className='form-input-wish'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='form-group-wish phone-group'>
                            <div className='phone-left-wish'>
                                <div className='phone-flag'>
                                    <img src={flag} alt='flag' />
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <p>+91</p>
                            </div>
                            <div className='phone-right'>
                                <input
                                    type='tel'
                                    placeholder='Mobile *'
                                    className='phone-input'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='form-group-wish emailhai'>
                            <input
                                type='email'
                                placeholder='Email *'
                                className='form-input-wish'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='dobhai'>
                            <input
                                type='text'
                                placeholder='Nationality * '
                                className='form-input-wish ekor'
                            />
                             <input
                                type='date'
                                placeholder='DOB * '
                                className='form-input-wish ekdusra'
                            />
                        </div>
                        <button className='form-submit'>Submit</button>
                        <div className='form-footer'>
                <p>By submitting this form, you agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrationfrom
