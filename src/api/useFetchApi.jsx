import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useFetchApi = () => {

    const axiosSecure=useAxiosSecure();

    const myEvents=(email)=>{
        return axiosSecure.get(`/myEvents?email=${email}`).then(res=> res.data);
    }
    
    return {
        myEvents
    };
};

export default useFetchApi; 