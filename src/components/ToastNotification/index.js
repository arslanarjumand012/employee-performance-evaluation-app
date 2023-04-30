import React, { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalizeString } from '../../api/integrations/GlobalFunctions';
import { DATA_TYPE, MESSAGE } from '../../constants';

const ToastWrapper = lazy(() => import('./components/ToastWrapper'));

const ToastNotification = ({ message, url }) => {
  const navigate = useNavigate();

  return (
    <ToastWrapper>
      <div onClick={() => (url ? navigate(url) : null)}>
        <div className="text-[14.5px] mt-[2px]">
          {typeof message === DATA_TYPE.STRING ? capitalizeString(message) : MESSAGE.INTERNAL_ERROR}
        </div>
      </div>
    </ToastWrapper>
  );
};

export default ToastNotification;
