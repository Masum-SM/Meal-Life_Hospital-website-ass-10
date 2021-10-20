import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='images/cover-1.png'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MEND LIFE HOSPITAL</h3>
                        <p>Main Building view of Mend Life Hospital.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='images/cover-4.png'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>INTERNAL VIEW OF HOSPITAL</h3>
                        <p>Internal view of Mend Life Hospital.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src='images/cover-3.png'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Operation Theatur</h3>
                        <p>Cardiology Operation Room</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;