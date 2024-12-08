import { useContext } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import bannerImg from "../assets/img_1.jpg";
import bannerImg2 from "../assets/img_3.jpg";
import bannerImg3 from "../assets/img_4.jpg";
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    const { user } = useContext(AuthProviderContext);
    return (
        <div className="mb-12" >

            <div className="carousel  rounded-b-lg w-full h-[220px] sm:h-[300px] md:h-[410px]" data-aos="fade-up ">

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bannerImg3}
                        className="w-full" />

                    <div className="absolute bg-black inset-0 flex flex-col justify-center items-center  bg-opacity-50 text-center p-4">
                       
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                            <Typewriter
                                words={['Welcome to Our Platform']}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="mt-3 text-white text-sm  md:text-lg w-[60%] md:w-full mx-auto">Explore our features and discover endless possibilities</p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bannerImg2}
                        className="w-full" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                            <Typewriter
                                words={['Achieve Your Goals']}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="mt-3 text-white text-sm  md:text-lg w-[60%] md:w-full mx-auto">We help you stay on track and reach your dreams.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={bannerImg}
                        className="w-full" />
                    
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                            <Typewriter
                                words={['Join Our Community']}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="mt-3 text-white text-sm  md:text-lg w-[60%] md:w-full mx-auto">Connect, grow, and thrive with us.</p>
                    </div> 
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;