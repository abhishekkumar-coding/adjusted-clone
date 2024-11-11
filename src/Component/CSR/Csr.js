import React from 'react'
import "./Csr.css"
import compass from "../../assets/Home/compass1.png"
import compass2 from "../../assets/Home/compass2.png"
import Maskgroup from "../../assets/About/Maskgroup.png"
import Header from '../Header/Header'
const Csr = () => {
    return (
        <div>
            <Header />
            <div className='CSRpage'>
                <div className='csrpagepart'>
                    <img className='productcom' src={compass} alt='compass' />
                    <div className='csrleftpart'>
                        <h1>Humanitarian</h1>
                        <p>Empowering Humanity Through Compassion</p>
                        <a className="donate-button">
                            <span className="heart-icon"></span>
                            DONATE
                        </a>
                    </div>
                    <div className='csrrightpart'>
                        <img className='maskgroup1' src={Maskgroup} alt='WhoWeare' />
                    </div>
                </div>
                <div className='csrbottem'>
                    <img className='csrcompass2' src={compass2} alt='compass' />
                    <h2>FBT <span>Welfare Foundation</span></h2>
                    <p>Maintainability, social equity and the earth are currently business issues. Also, corporate pioneers can't rely upon governments to settle them.</p>
                    <p>Roused by Senge's way of thinking, a gathering of youthful corporate experts met up in 2011 to set up FBT Welfare Foundation to work with grassroots activities for affecting positive changes in the lives of oppressed youngsters, their families and communitie.</p>
                    <p>FBT Welfare Foundation is to enable oppressed kids, youth and ladies through important instruction, Also its devoted to battling youngster prostitution, second era prostitute, dealing of lady and kids for constrained work or sex primarily in Northern India, Its imaginative medicinal services and market-centered job programs.</p>
                    <p>FBT Welfare Foundation is to send most ideal procedure and innovation for accomplishing perfect SROI (social quantifiable profit), to rehearse and advance great administration. To interface business intensity of the corporate with social advancement activities; likewise to sharpen favored youngsters, youth and residents when all is said in done to advance Civic Driven Change.</p>
                    <p>FBT Welfare establishment is a non-benefit organization cause which is working in the nation since consolidation to lift and enable our brethren living in the forested areas, mountains and those underneath the neediness line. FBT Group is glad to contribute the assets to Sansthan to set up a school for Children.</p>
                    <h3>Social Help</h3>
                    <p>Food Banks | Donate Blood | Older People | Homeless Peoples | Smaller Businesses | Child | Save Girl</p>
                </div>
            </div>
        </div>
    )
}

export default Csr
