import { React } from "react";
import { useSidebarContext } from "../context/SidebarContext";
import CollapsedSidebar from "./Sidebars/CollapsedSidebar";
import ExtendedSidebar from "./Sidebars/ExtendedSidebar";

const Sidebar = () => {
  const { sideBar } = useSidebarContext();
  return (
    <>
      <CollapsedSidebar />
      {sideBar && <ExtendedSidebar />}
    </>
  );
};

export default Sidebar;
