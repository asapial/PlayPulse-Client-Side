import React, { useEffect, useState } from 'react';
import DataCard from '../../Atoms/DataCard';

const ShowEvent = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
    fetch('http://localhost:3000/showSixData')
    .then(res=>res.json())
    .then(fetchData=>setData(fetchData))
    },[setData])

    console.log(data);
    return (
        <div>
            <h1>Event is showed</h1>
            <div>
                {
                    data.map((item,index)=><DataCard data={item} key={index}></DataCard>)
                }
            </div>

        </div>
    );
};

export default ShowEvent;