import { nanoid } from 'nanoid';

export const URL = {
  HOME: {
    ROUTE: 'Home',
    BASE: '/'
  },
  LOGOUT: {
    ROUTE: 'Logout',
    BASE: '/logout'
  },
  DASHBOARD: {
    ADMIN: {
      HOME: {
        ROUTE: 'Admin-Dashboard-Home',
        BASE: '/dashboard/admin/'
      },
      SETTING: {
        ROUTE: 'Admin-Dashboard-Setting',
        BASE: 'setting'
      }
    },
    USER: {
      HOME: {
        ROUTE: 'User-Dashboard-Home',
        BASE: '/dashboard/user/'
      },
      SETTING: {
        ROUTE: 'User-Dashboard-Setting',
        BASE: 'setting'
      }
    }
  },
  NOT_FOUND_PAGE: '*'
};

export const APP_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

export const ADMIN_NAV_LIST = (layout, route) => [
  {
    id: nanoid(),
    name: 'Dashboard',
    route: URL.DASHBOARD.ADMIN.HOME.BASE,
    icon: 'fas fa-home',
    gap: false,
    active: route === URL.DASHBOARD.ADMIN.HOME.ROUTE ? true : false
  },
  {
    id: nanoid(),
    name: 'Settings',
    route:
      layout === APP_ROLES.USER
        ? URL.DASHBOARD.USER.HOME.BASE + URL.DASHBOARD.USER.SETTING.BASE
        : URL.DASHBOARD.ADMIN.HOME.BASE + URL.DASHBOARD.ADMIN.SETTING.BASE,
    icon: 'fas fa-cog',
    gap: false,
    active: route === URL.DASHBOARD.ADMIN.SETTING.ROUTE ? true : false
  }
];

export const USER_NAV_LIST = (layout, route) => [
  {
    id: nanoid(),
    name: 'Dashboard',
    route: URL.DASHBOARD.USER.HOME.BASE,
    icon: 'fas fa-home',
    gap: false,
    active: route === URL.DASHBOARD.USER.HOME.ROUTE ? true : false
  },
  {
    id: nanoid(),
    name: 'Settings',
    route:
      layout === APP_ROLES.USER
        ? URL.DASHBOARD.USER.HOME.BASE + URL.DASHBOARD.USER.SETTING.BASE
        : URL.DASHBOARD.ADMIN.HOME.BASE + URL.DASHBOARD.ADMIN.SETTING.BASE,
    icon: 'fas fa-cog',
    gap: false,
    active: route === URL.DASHBOARD.USER.SETTING.ROUTE ? true : false
  },
  {
    id: nanoid(),
    name: 'Logout',
    route: URL.HOME,
    icon: 'fas fa-sign-out',
    gap: true,
    active: false
  }
];

export const REG = {
  VALIDATE_EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  VALIDATE_PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
};

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export const MESSAGE = {
  INTERNAL_ERROR: 'Internal error',
  LOGIN_SUCCESS: 'Login successfully',
  LOGIN_FAILED: 'Login failed'
};

export const LOCAL_STORAGE_KEY = {
  THEME: 'theme'
};

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const DATA_TYPE = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  OBJECT: 'object',
  ARRAY: 'array'
};
