import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className='px-5'>
    <Navbar.Brand as={Link} to="/">Admin</Navbar.Brand>
  </Navbar>
);

export default NavigationBar;