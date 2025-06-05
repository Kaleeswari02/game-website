'use client'
import './career.css'
import { FiArrowUpRight ,FiArrowRight} from 'react-icons/fi'; 

export default function CareerSection(){
    return(
        <>
            <div className="container-fluid career-area-height" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 career-part1">
                            <div className="image-section">
                                {/* <div className="small-image-sec1">
                                    <img src="/images/gamei1.png" alt="" className='image-style-1'/>
                                    <img src="/images/gamei2.png" alt="" className='image-style-2'/>
                                </div> */}
                                <div className="career-main-img">
                                    <img src="/images/career.png" alt="" className='carrer-img'/>
                                </div>
                                {/* <div className="small-image-sec2">
                                    <img src="/images/gamei3.png" alt="" className='image-style-3'/>
                                    <img src="/images/gamei4.png" alt="" className='image-style-4'/>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-5 mt-lg-5  col-12 career-part1">
                            <div className="career-content p-xl-5 p-lg-5  mt-xl-5 mt-lg-5">
                                <h2 className="career-head">Power up your career</h2>
                                <p className="career-para">At Beeyoond, we’re more than a tech company — we’re a team of creatives, developers, and innovators shaping the future of digital experiences. Whether you're an animator, game designer, video editor, blockchain developer, or AR/VR enthusiast, this is the place to bring your skills to life.

                                    <br></br><br></br>We believe in collaboration, creativity, and continuous growth. Our projects span industries and technologies, giving you the chance to work on exciting, meaningful challenges that make an impact. If you're passionate about blending art with innovation, and you want to be part of a dynamic team pushing boundaries — we’d love to hear from you.</p>
                                <div className='career-btn-area'><button className="career-button" ><a href="/careers">
                                Join with us  <span className='careerButtonArrow ms-2'>
                <FiArrowUpRight className="arrowDefault" />
                <FiArrowRight className="arrowHover" />
                </span></a></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}