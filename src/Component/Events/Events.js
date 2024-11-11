import React, { useState } from "react";
import "./events.css"
import Header from '../Header/Header'
import compass from "../../assets/Home/compass1.png"
import compass2 from "../../assets/Home/compass2.png"
import Line from "../../assets/Events/lineset.png"
import wtmlondon from "../../assets/Events/WTM_London.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import study from "../../assets/Events/socialeventimg.png"
import downloadicon from "../../assets/Events/Icon.png"
import Registrationfrom from '../Registartionform/Registrationfrom'
import "swiper/css";

const Events = () => {
  const [openform, setOpenform] = useState(false);
  const handleOpenform = () => {
    setOpenform(!openform);
  };
  const studyPrograms = [
    {
      id: 1,
      university: 'Oxford University',
      degree: 'MSc in Advanced Computer Science',
      duration: '12 Months',
      location: 'England',
      imgSrc: study,
    },
    {
      id: 2,
      university: 'Harvard University',
      degree: 'MSc in Data Science',
      duration: '24 Months',
      location: 'USA',
      imgSrc: study,
    },
    {
      id: 3,
      university: 'MIT',
      degree: 'MSc in AI and Robotics',
      duration: '18 Months',
      location: 'USA',
      imgSrc: study,
    },
    {
      id: 4,
      university: 'Cambridge University',
      degree: 'MSc in Advanced Computer Science',
      duration: '12 Months',
      location: 'UK',
      imgSrc: study,
    }
  ];
  return (
    <>
      <div>
        <Header />
        <div className='eventpage'>
          <div className='eventpagepart'>
            <img className='eventcom' src={compass} alt='compass' />
            <img className='eventcom2' src={compass2} alt='compass' />
            <img className='eventcom3' src={compass} alt='compass' />
            <div className='lineimg'>
              <img src={Line} alt='Line' />
            </div>
            <div className='eventleftpart'>
              <h3 className='event'>Events</h3>
              <h1 className='spot'>Spotlighted</h1>
              <h3 className='comm'>Commentary....</h3>
              <p><strong>WTM London</strong> (World Travel Market London) is a prominent</p>
              <p>annual event in the travel and tourism industry, held at the</p>
              <p>ExCeL London. It serves as a global platform for professionals </p>
              <p>from the travel sector to network, share knowledge, and explore</p>
              <p>new business opportunities. The event typically features a</p>
              <p>diverse range of exhibitors, including travel agencies, tour</p>
              <p>operators, destinations, and technology providers, showcasing</p>
              <p>the latest trends and innovations in travel.</p>
            </div>
            <div className='eventrightpart'>
              <img src={wtmlondon} />
              <h3 className='date'>5-7th Nov’24, 10:00 A.M</h3>
              <p>Excel, London (U.K)</p>
            </div>
          </div>
          <div className='eventschedule'>
            <h1>Schedule <span>Events</span></h1>
            <div className='studyprogram'>
              <div className='swiper-button-next arrow-left upcomaingarrow'><i class="fa-solid fa-angle-left"></i></div>
              <div className='swiper-button-prev custom-arrow-right arrow-right upcomaingarrowright'><i class="fa-solid fa-chevron-right"></i></div>
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                modules={[Navigation]}
                loop={true}
                className='mySwiper'
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  320: {   // For phones
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {   // For tablets
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {  // For laptops and larger screens
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {studyPrograms.map(program => (
                  <SwiperSlide key={program.id}>
                    <div className='socialevent'>
                      <img src={program.imgSrc} alt='study' />
                      <button className='socialeventbtn'>Social Event</button>
                      <p className='socialeventpara'>The Park Hotel, 15, Sansad Marg, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001</p>
                      <div className='socialeventlastbtn'>
                        <button onClick={handleOpenform} className='pehlavala'>Register Now</button>
                        <button className='dusraval'><img src={downloadicon} alt='downloadicon' />Download Pass</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
          <div className='eventschedule'>
            <h1>Previous <span>Events</span></h1>
            <div className='studyprogram'>
              <div className='swiper-button-next arrow-left upcomaingarrow'><i class="fa-solid fa-angle-left"></i></div>
              <div className='swiper-button-prev custom-arrow-right arrow-right upcomaingarrowright'><i class="fa-solid fa-chevron-right"></i></div>
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                modules={[Navigation]}
                loop={true}
                className='mySwiper'
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  320: {   // For phones
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {   // For tablets
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {  // For laptops and larger screens
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {studyPrograms.map(program => (
                  <SwiperSlide key={program.id}>
                    <div className='socialevent'>
                      <img src={program.imgSrc} alt='study' />
                      <button className='socialeventbtn'>Social Event</button>
                      <p className='socialeventpara'>The Park Hotel, 15, Sansad Marg, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001</p>
                      <div className='socialeventlastbtngallery'>
                        <button className='eventgallery'>Event Gallery</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {openform && (
        <div className="formhaibhai">
          <Registrationfrom onClose={() => setOpenform(false)}/>
        </div>
      )}
    </>
  )
}

export default Events
