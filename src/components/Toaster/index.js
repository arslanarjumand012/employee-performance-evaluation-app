import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

const Toaster = () => {
  return (
    <ToastContainer
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      position="top-center"
      rtl={false}
      transition={Zoom}
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover
    />
  );
};

export default Toaster;
