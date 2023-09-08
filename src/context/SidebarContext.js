// SidebarContext.js
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <SidebarContext.Provider value={{ sideBar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
