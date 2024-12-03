import React from 'react'
import TeamList from '../team-data/Data'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';

const TeamDetails = () => {
  const { id } = useParams();
  const details = TeamList.filter( x => x.id == id).shift();
  return(
    <Container className='mt-3'>
      <h1>{details.name}</h1>
      <p>{details.role}</p>
      <p>{details.email}</p>
    </Container>
  )
}

export default TeamDetails