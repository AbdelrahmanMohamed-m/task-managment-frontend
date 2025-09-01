export const NAV_TARGET = {
  LOGIN: "login",
  SIGNUP: "signup",
  LANDING: "landing",
  DASHBOARD: "dashboard",
} as const;

export type NavTarget = typeof NAV_TARGET[keyof typeof NAV_TARGET];