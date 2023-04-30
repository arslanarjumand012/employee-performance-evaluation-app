import React, { lazy } from "react";
import { toast } from "react-toastify";

const ToastNotification = lazy(() =>
  import("../../../components/ToastNotification")
);

export const toastError = (message) => {
  return toast.error(<ToastNotification message={message} />);
};

export const toastInfo = (message) => {
  return toast.info(<ToastNotification message={message} />);
};

export const toastSuccess = (message) => {
  return toast.success(<ToastNotification message={message} />);
};

export const toastWarning = (message) => {
  return toast.warning(<ToastNotification message={message} />);
};
