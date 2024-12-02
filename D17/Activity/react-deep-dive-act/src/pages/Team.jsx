import React from 'react'
import { Outlet } from 'react-router-dom'

const Team = () => {
  return (
    <div>
      <h1>Team List</h1>
      <Outlet />
    </div>
  )
}

export default Team
