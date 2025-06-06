import React from 'react';
import NavBar from '../../Components/Common/NavBar';
import ShowEvent from '../../Components/Event/ShowEvent';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <ShowEvent></ShowEvent>
        </div>
    );
};

export default Home;