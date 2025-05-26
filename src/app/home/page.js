import './home.css';
export default function HomeSection(){
    return(
        <>
            <div className="container-fluid background-section">
                <div className="container background-content">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-8 col-md-8 mt-xl-5 mt-lg-5 mt-md-5">
                            <div className="banner-content mt-xl-5 mt-lg-5 mt-md-5">
                                <h1><span className='banner-h1'>WE MAKE</span><span className='banner-h2'>WE MAKE GAMES</span></h1>
                                <p>An award-winning India-based Casino Slot Game Development Company pushing the boundaries of narrative and serious games. Our passion for innovation drives us to develop groundbreaking games across genres, seamlessly blending engaging gameplay with meaningful narratives. Whether it’s creating stunning visuals, intuitive mechanics, or emotionally resonant stories, Gamecrio is dedicated to delivering exceptional quality in every project. As a leading game development company in India, we take pride in crafting experiences that engage players worldwide.</p>
                                <button>GET IN TOUCH</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 mt-xl-5 mt-lg-5 mt-md-5">
                            <div className="banner-image mt-xl-5 mt-lg-5 mt-md-5 p-xl-5">
                            <img className='banner-image-sec' src='/images/banner.png' alt="Description of image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}