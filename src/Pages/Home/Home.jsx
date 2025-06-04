import React from 'react';
import NavBar from '../../Components/Common/NavBar';
import ShowEvent from '../../Components/Event/ShowEvent';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <h1 className=' text-primary text-5xl'>HI I am pial</h1>
            <ShowEvent></ShowEvent>
        </div>
    );
};

export default Home;