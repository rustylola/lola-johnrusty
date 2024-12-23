import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar, Sidebar, SidebarMobile } from '../components'

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = {name:'john'}
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = async () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = () => {
    console.log('logout user');
  };
  
  return (
    <DashboardContext.Provider value={
      {user, showSidebar,isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser}
      }>
      <Wrapper>
        <main className="dashboard">
          <Sidebar />
          <SidebarMobile />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;