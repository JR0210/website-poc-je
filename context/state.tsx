import React, { createContext, useContext, useState } from "react";

type UpdateType = React.Dispatch<React.SetStateAction<boolean>>;

interface IAppContext {
  sidebarOpen: boolean;
  toggleSidebar: UpdateType;
  dashboardOpen: boolean;
  toggleDashboard: UpdateType;
  user: string;
}

interface Props {
  children: React.ReactNode;
}

let sharedState = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  dashboardOpen: false,
  toggleDashboard: () => {},
  user: "",
};

const AppContext = createContext<IAppContext>(sharedState);

export function AppWrapper({ children }: Props) {
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [dashboardOpen, toggleDashboard] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...sharedState,
        sidebarOpen,
        toggleSidebar,
        dashboardOpen,
        toggleDashboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
