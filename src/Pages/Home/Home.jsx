import React from 'react';
import NavBar from '../../Components/Common/NavBar';
import ShowEvent from '../../Components/Event/ShowEvent';
import Slider from '../../Components/Common/Slider';

const Home = () => {
    return (
        <div className='min-h-screen'>
        <title>PlayPulse | Home</title>
        <Slider></Slider>
            <ShowEvent></ShowEvent>
        </div>
    );
};

export default Home;