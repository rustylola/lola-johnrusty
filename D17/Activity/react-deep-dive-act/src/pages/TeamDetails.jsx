import React from 'react'
import { useParams } from 'react-router-dom'

const TeamDetails = () => {
  const { id } = useParams();
  
  return <h2>Team ID: {id} </h2>
}

export default TeamDetails
