import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" bg-gradient-to-br from-base-300 via-base-100 to-base-300 p-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
