import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar, Sidebar, SidebarMobile } from '../components'
import { checkDefaultTheme } from '../App'

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = {name:'john'}
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = async () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
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