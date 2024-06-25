import React from 'react'
import { Carousel } from 'react-bootstrap'
import Data from '../shared/constant/constantData'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Outlet } from 'react-router-dom';
import NavComp from './NAvComp';
import FooterComp from './FooterComp';


const HomeComp = () => {

    
    return (
        <div>
            {/* <h1 className="heading">Desi Tadka</h1> */}
            
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={Data.food4} alt='food1' width="100%" height="600px"></img>
                    <Carousel.Caption>
                        <h3>Delightful</h3>
                        <p>Savor every bite, indulge in flavor. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={Data.food2} alt='food2' width="100%" height="600px"></img>
                    <Carousel.Caption>
                        <h3>Distinctive </h3>
                        <p>Where Culinary excellence meets your craving</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={Data.food3} alt='food3' width="100%" height="600px"></img>
                    <Carousel.Caption>
                        <h3>Declectable</h3>
                        <p>
                            Elevate your Taste: Where Every Meal is a Culinary Masterpiece
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default HomeComp
