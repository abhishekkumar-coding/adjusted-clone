import React from 'react'
import "./aboutus.css"
import compass from "../../assets/Home/compass1.png"
import compass2 from "../../assets/Home/compass2.png"
import Header from '../Header/Header'
import LeftSide from "../../assets/Product/LeftLine.png"
import RightSide from "../../assets/Product/RightLine.png"
import Maskgroup from "../../assets/About/Maskgroup.png"
import vector from "../../assets/About/Vector.png"
import vector2 from "../../assets/About/Vector1.png"
import { useInView } from 'react-intersection-observer';
const AboutUs = () => {
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
    const { ref: fbtRef, inView: fbtInView } = useInView({ triggerOnce: true });
    const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
    return (
        <div>
            <Header />
            <div className='aboutushai'>
                <div className='aboutuspart'>
                    <img className='productcom' src={compass} alt='compass' />
                    <h2>FBT<span> Journey </span></h2>
                    <div ref={aboutRef} className={`about-container ${aboutInView ? 'animate-slideUp' : ''}`}>
                        <img className='leftline' src={LeftSide} alt='LeftSide' />
                        <div className='aboutdescription'>
                            <p>FBT is a team of passionate travelers aiming to make global travel easy and accessible. They offer comprehensive</p>
                            <p>services like air fares, hotels, travel insurance, visas, forex, and holidays, all at competitive B2B rates. Powered by a</p>
                            <p>dynamic API and secure gateways, FBT serves as a meta aggregator, integrating multiple inventories for flights and</p>
                            <p>hotels on one platform. Their diverse offerings in airlines, holidays, and interior design have made FBT a preferred</p>
                            <p>choice, driven by an innovative team committed to expanding products and services both online and offline. With</p>
                            <p>an extensive network and unique market insights, FBT continues to foster growth opportunities for partners and</p>
                            <p>clients alike, making travel seamless and enriching.</p>
                        </div>
                        <img className='rightline' src={RightSide} alt='RightSide' />
                    </div>
                </div>
                <div className='fbttravel'>
                    <img className='fbtcompass2' src={compass2} alt='compass' />
                    <h2>FBT<span> in Travel Technology </span></h2>
                    <div  ref={missionRef} className='inside_fbttravel'>
                        <img  className={`maskgroup1 ${missionInView ? 'animate-slideInLeft' : ''}`} src={Maskgroup} alt='WhoWeare' />
                        <div className={missionInView ? 'animate-slideInRight' : ''}>
                            <p>FBT Adventures India Pvt Ltd., based in Delhi and established in 2018, is a travel technology company affiliated with Sea World Corporation UAE & Asia Pacific. Specializing in B2B travel technology, FBT provides world-class solutions to streamline business processes, enhance revenue, and improve customer experiences for travel agents and corporate clients. With a strong focus on client satisfaction, quality, and transparency, FBT delivers globally competitive software solutions, ensuring optimal pricing and value for all clients.</p>
                        </div>
                    </div>
                </div>
                <div className='fbttravel'>
                    <div className='inside_fbttravel2'>
                        <div>
                            <p>“Our challenge is to be the main and most accurate Tour management employer in the international that units the usual for competence and reliability to our customers.” To be our client’s trusted, committed and reliable business partner. To invest whatever how to autobiography time necessary to ensure the highest levels of customer services are provided to ensure we not only meet but, exceed our client’s expectations.</p>
                        </div>
                        <div className='mission'>
                            <img className='vector' src={vector} alt='WhoWeare' />
                            <h3>Mission</h3>
                        </div>
                    </div>
                </div>
                <div className='fbttravel'>
                    <img className='productcom2' src={compass} alt='compass' />
                    <div className='inside_fbttravel3'>
                        <div className='vission'>
                            <img className='vector1' src={vector2} alt='WhoWeare' />
                            <h3>Vission</h3>
                        </div>
                        <div>
                            <p>To grow and develop Employee-ship into a business providing professional services provider, A business with integrity and moral responsibility. Our imaginative and prescient “To provide pinnacle best service to our customers, assist their travels and holidays wishes, with integrity, initiative and dependability this is the manner”</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs
