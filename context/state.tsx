import React, { createContext, useContext } from "react";

interface IAppContext {
  sidebarOpen: boolean;
  dashboardOpen: boolean;
  user: string;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext | null>(null);

export function AppWrapper({ children }: Props) {
  let sharedState = { sidebarOpen: false, dashboardOpen: false, user: "" };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
