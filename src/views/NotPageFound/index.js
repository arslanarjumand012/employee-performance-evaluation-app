import React, { lazy } from 'react';
import { useTheme } from '../../theme';
import { THEME_MODE, URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const DarkModeSwitch = lazy(() => import('../../components/DarkModeSwitch'));

const NotPageFound = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <section className={theme === THEME_MODE.DARK ? 'bg-gray-900' : 'bg-white'}>
      <div className="absolute top-10 right-10">
        <DarkModeSwitch />
      </div>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p
            className={
              theme === THEME_MODE.DARK
                ? 'p-3 text-sm font-medium text-indigo-600 rounded-full bg-gray-800'
                : 'p-3 text-sm font-medium text-indigo-600 rounded-full bg-blue-50'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1
            className={
              theme === THEME_MODE.DARK
                ? 'mt-3 text-2xl font-semibold text-white md:text-3xl'
                : 'mt-3 text-2xl font-semibold text-gray-800 md:text-3xl'
            }
          >
            Page not found
          </h1>
          <p className={theme === THEME_MODE.DARK ? 'mt-4 text-gray-400' : 'mt-4 text-gray-500'}>
            The page you are looking for doesn't exist. Here are some helpful links:
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-600 rounded-lg shrink-0 sm:w-auto hover:bg-indigo-800"
              onClick={() => navigate(URL.HOME.BASE)}
            >
              Take me home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotPageFound;
