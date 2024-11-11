import React from 'react'
import "./contactus.css"
import compass from "../../assets/Home/compass1.png"
import compass2 from "../../assets/Home/compass2.png"
import Maskgroup from "../../assets/About/Maskgroup.png"
import Header from '../Header/Header'
const Contactus = () => {
  return (
    <div>
      <Header />
      <div className='contactuspage'>
        <div className='contactuspart'>
        <img className='contactuscom3' src={compass} alt='compass' />
          <img className='contactuscom' src={compass} alt='compass' />
          <div className='contactleftpart'>
            <h1>Get <span>in touch</span></h1>
            <p>Contact our team</p>

          </div>
          <div className='contactrightpart'>
            <img className='maskgroup1' src={Maskgroup} alt='WhoWeare' />
          </div>
        </div>
        <div className='lowerpart'>
        <img className='contactuscom2' src={compass2} alt='compass' />
          <h2>Our <span>Offices</span></h2>
          <div className="offices-container">
            <div className="office-box">
              <h3>Head Office (Dubai, U.A.E)</h3>
              <p>Office No. 400-70, Fairhd Height Office Tower, 4th Floor,<br />
                Sharaf DG Metro Station gate No.4, Bur Dubai,<br />
                United Arab Emirates
              </p>
              <p className='newpara'><strong><i class="fa-solid fa-phone"></i></strong> +971-43384075</p>
              <p><strong><i class="fa-solid fa-envelope"></i></strong> care@fbt.ae</p>
            </div>
            <div className="office-box">
              <h3>Corporate Office (Noida, Delhi NCR)</h3>
              <p>BSI Business Park Suite No 803 H15, Sector 63,<br />
                Noida, Uttar Pradesh 201301, India
              </p>
              <p className='newpara'><strong><i class="fa-solid fa-phone"></i></strong> +91-7388222244</p>
              <p><strong><i class="fa-solid fa-envelope"></i></strong> support@flybirdtourism.com</p>
            </div>
            <div className="office-box">
              <h3>Regional Office (Mumbai, Maharashtra)</h3>
              <p>Office No. 400-70, Fairhd Height Office Tower, 4th Floor,<br />
                Sharaf DG Metro Station gate No.4, Bur Dubai,<br />
                United Arab Emirates
              </p>
              <p className='newpara'><strong><i class="fa-solid fa-phone"></i></strong> +91-2265816147</p>
              <p><strong><i class="fa-solid fa-envelope"></i></strong> sales@flybirdtourism.com</p>
            </div>
            <div className="office-box">
              <h3>Registered Office (Delhi NCR)</h3>
              <p>B-2/4710 Upper Ground Floor, near Iskcon Temple, Amit Puri,<br />
                Block B, East of Kailash, New Delhi, Delhi 110065, India
              </p>
              <p className='newpara'><strong><i class="fa-solid fa-phone"></i></strong> +91-7388222244</p>
              <p><strong><i class="fa-solid fa-envelope"></i></strong> support@flybirdtourism.com</p>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="form-section">
              <h3>We want to hear<br/> from you</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="First Name *" required />
                  <input type="text" placeholder="Last Name *" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Phone *" required />
                  <input type="email" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option>Comment Type *</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                  <input type="text" placeholder="Nationality *" required />
                </div>
                <textarea placeholder="Type your comment *" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p>Monday to Saturday (9:30am - 6:30pm)</p>
              <p>Sunday Off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
