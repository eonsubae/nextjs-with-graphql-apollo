import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold" href="#">
          Eonsu Bae
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#" className="mr-3">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#" className="mr-3">
              Courses
            </Nav.Link>
            <Nav.Link href="#" className="mr-3">
              Cv
            </Nav.Link>
            <Nav.Link href="#" className="mr-3">
              Ask me
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="mr-3">
              Sign Up
            </Nav.Link>
            <Nav.Link href="#" className="mr-3">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
