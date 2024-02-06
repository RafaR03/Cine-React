import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c42022d4ec4fbb999f74a6ff8f367c18';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const slidesData = data.results.map(movie => movie.poster_path);
                setSlides(slidesData);
            })
            .catch(error => console.error(error));
    }, []);

    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`${className} absolute top-1/2 left-4 z-50 cursor-pointer`} onClick={onClick}>
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`${className} absolute top-1/2 right-4 z-50 cursor-pointer`} onClick={onClick}>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h1 className="text-5xl text-center font-bold italic text-white mb-12">Welcome to Imperium Cinema</h1>
            <div className="max-w-screen-lg mx-auto mt-8 flex">
                <div className="max-w-lg max-h-1/2 overflow-hidden">
                    <Slider {...settings}>
                        {slides.map((s, index) => (
                            <div key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500${s}`} alt={`Slide ${index}`} className="max-w-full h-auto" />
                            </div>
                        ))}
                    </Slider>
                    <p className='text-gray-900'>a</p>
                </div>
                <div className="ml-8 bg-gray-800 rounded-lg p-2 mb-4">
                    <h2 className="text-4xl font-bold text-white underline italic mb-4">Popular Films</h2> <br />
                    <p className="text-lg mb-6 text-white ">Nestled in the heart of the city, Imperium Cinema is a haven for movie enthusiasts. Offering a curated selection of timeless classics and contemporary gems, it captivates audiences with captivating narratives and stunning visuals. <br /> <br />

Immerse yourself in a world where every frame tells a story, from epic adventures to intimate tales of love and loss. Beyond entertainment, Imperium Cinema fosters a sense of community, uniting cinephiles in their shared passion for storytelling. <br /> <br />

Step into the elegant lobby adorned with vintage movie posters and the aroma of freshly popped popcorn, where anticipation fills the air before each screening. As the lights dim and the screen comes to life, embark on a cinematic journey that transcends time and space. <br /> <br />

From the laughter of comedies to the edge-of-your-seat suspense of thrillers, Imperium Cinema offers something for every moviegoer. Whether you're seeking escapism, inspiration, or simply an evening of entertainment, you'll find it within the walls of Imperium Cinema.</p>
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;

