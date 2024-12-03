import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TeamList from '../team-data/Data'
import { Container } from 'react-bootstrap';

const Team = () => {

  return (
    <Container className='mt-4'>
      <Row xs={1} md={3} className="g-4">
        {
          TeamList.map(details => (
            <Col key={details.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{details.name}</Card.Title>
                  <Link to={`/team/${details.id}`}>
                  <Button variant="primary" >Go to Details</Button>
                </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Team
