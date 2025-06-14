import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useFetchApi = () => {
  const axiosSecure = useAxiosSecure();

  const myEvents = (email) => {
    return axiosSecure.get(`/myEvents?email=${email}`).then((res) => res.data);
  };
  const fetchEventDetails = (id, email) => {
    return axiosSecure
      .get(`/events/?id=${id}&email=${email}`)
      .then((res) => res.data);
  };

  const fetchBookedData = (uid, email, eventId) => {
    return axiosSecure
      .get(`/checkBooking/?uid=${uid}&email=${email}&eventId=${eventId}`)
      .then((res) => res.data);
  };

  const bookEvent = (uid, email, eventId) => {
  return axiosSecure.post(`/checkBooking/?uid=${uid}&email=${email}&eventId=${eventId}`)
    .then((res) => res.data);
};

  return {
    myEvents,
    fetchEventDetails,
    fetchBookedData,
    bookEvent,
  };
};

export default useFetchApi;
