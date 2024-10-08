import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
    return (
        <div>
            <Carousel >
                <div className='h-[550px]'>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/rt7RgvP/Doctor-Expert-team.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-3 text-5xl font-bold text-white">Doctor Expert Team</h1>
                                <p className="mb-3 text-lg text-white">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <p className='mb-3 text-4xl text-white font-bold'>Use Coupon Code:AQBSR Get 25% oFF </p>
                                <button className="btn text-xl btn-primary">All Tests</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[550px]'>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/dg8rdkx/child-care.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-3 text-5xl text-white font-bold">Child Care</h1>
                                <p className="mb-3 text-white">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <p className='mb-3 text-4xl text-white font-bold'>Use Coupon Code:AQBSR Get 25% oFF </p>
                                <button className="btn text-xl btn-primary">All Tests</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[550px]'>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/Q65Z1w3/Newborn-Baby-care.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-3 text-5xl font-bold">Newborn Baby Care</h1>
                                <p className="mb-3 text-white">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <p className='mb-3 text-4xl text-white font-bold'>Use Coupon Code:AQBSR Get 25% oFF </p>
                                <button className="btn text-xl btn-primary">All Tests</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[550px]'>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/pRjZM75/New-Born-Care-banner.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-3 text-white text-5xl font-bold">Newborn Care</h1>
                                <p className="mb-3">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <p className='mb-3 text-4xl text-white font-bold'>Use Coupon Code:AQBSR Get 25% oFF </p>
                                <button className="btn text-xl btn-primary">All Tests</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;