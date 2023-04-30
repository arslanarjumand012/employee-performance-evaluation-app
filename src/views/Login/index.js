import React, { lazy } from "react";
import { useTheme } from "../../theme";
import { THEME_MODE, URL, MESSAGE } from "../../constants";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../api/integrations/Toaster";

const DarkModeSwitch = lazy(() => import("../../components/DarkModeSwitch"));

const Login = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const onSubmitData = (e) => {
    e.preventDefault();
    navigate(URL.DASHBOARD.USER.HOME.BASE);
    toastSuccess(MESSAGE.LOGIN_SUCCESS);
  };

  return (
    <div
      className={`flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ${
        theme === THEME_MODE.DARK
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="absolute top-10 right-10">
        <DarkModeSwitch />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-50 w-auto" src={Logo} alt="EPS-Logo" /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmitData}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  theme === THEME_MODE.DARK
                    ? "ring-gray-600 text-white bg-gray-700"
                    : "ring-gray-300 text-gray-900 bg-white"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className={`font-semibold ${
                    theme === THEME_MODE.DARK
                      ? "text-indigo-300 hover:text-indigo-200"
                      : "text-indigo-600 hover:text-indigo-500"
                  }`}
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  theme === THEME_MODE.DARK
                    ? "ring-gray-600 text-white bg-gray-700"
                    : "ring-gray-300 text-gray-900 bg-white"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
