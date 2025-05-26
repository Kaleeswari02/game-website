import './home.css';
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon
export default function HomeSection(){
    return(
        <>
            <div className="container-fluid background-section">
                <div className="container background-content mb-xl-5 mb-lg-5">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-7 col-md-7 mt-xl-7 mt-lg-7 mt-md-7 mb-xl-5 mb-lg-5">
                            <div className="banner-content mt-xl-5 mt-lg-5 mt-md-5 ">
                                <div className="mt-xl-5 mt-lg-5 mt-md-5">
                                <h2><span className='banner-h1'>WE MAKE</span><br/><span className='banner-h2'>GAMES</span></h2>
                                <div><p className='banner-para mb-xl-5'>An award-winning India-based Casino Slot Game Development Company pushing the boundaries of narrative and serious games. Our passion for innovation drives us to develop groundbreaking games across genres, seamlessly blending engaging gameplay with meaningful narratives. Whether it’s creating stunning visuals, intuitive mechanics, or emotionally resonant stories, Gamecrio is dedicated to delivering exceptional quality in every project. As a leading game development company in India, we take pride in crafting experiences that engage players worldwide.</p></div>
                                <div><button className='mb-xl-5 banner-btn'>GET IN TOUCH <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 mt-xl-5 mt-lg-5 mt-md-5 mb-xl-5 mb-lg-5">
                            <div className="banner-image mt-xl-5 mt-lg-5 mt-md-5 p-xl-5">
                                 <img className='banner-image-sec' src='/images/banner.png' alt="Description of image" />
                            </div>
                        </div>
                        <div className='col-xl-1 col-lg-1 col-md-1 mb-xl-5 mb-lg-5'></div>
                    </div>
                </div>
            </div>
        </>
    )
}