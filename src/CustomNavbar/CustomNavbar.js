import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';



function CustomNavbar() {

  return (
    <div>
      <Navbar className="navbar" bg="black" expand="lg" variant="dark" >
        <Navbar.Brand href="#home"><img src="img/logo_navbar.png" alt="logo_navbar" height="88" width="108"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Nav.Link href="#home" className="home">HOME</Nav.Link>
              <NavDropdown title="ABOUT US"  className="about" id="nav-dropdown-about">
                <NavDropdown.Item href="#about" eventKey="2.1">CHI SIAMO</NavDropdown.Item>
                <NavDropdown.Item href="#benefit" eventKey="2.2">BENEFIT</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog" className="blog">BLOG</Nav.Link>
              <NavDropdown title="LXT"  className="teams" id="nav-dropdown-teams">
                <NavDropdown.Item href="#teams" eventKey="4.1">TEAMS</NavDropdown.Item>
                <NavDropdown.Item href="#partner" eventKey="4.2">PARTNERS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#academy" className="partner">ACADEMY</Nav.Link>
              <Nav.Link href="#contact" className="contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <div className="socials">
              <Nav.Link href="https://www.instagram.com/lxt.official/" target="_blank" className="instagram">
                <img src="img/ig.png" alt="instagram" height="17" width="19"></img>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/lxtesports" target="_blank" className="twitter">
                <img src="img/twitter.png" alt="twitter" height="17" width="17"></img>
              </Nav.Link>
              <Nav.Link href="https://www.twitch.tv/lxtesports" target="_blank" className="twitch">
                <img src="img/twitch.png" alt="twitch" height="17" width="17"></img>
              </Nav.Link>
              <Nav.Link href="https://www.tiktok.com/@lxtesports" target="_blank" className="tiktok">
                <img src="img/tiktok.png" alt="tiktok" height="17" width="17"></img>
              </Nav.Link>
            </div>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  );
} 

export default CustomNavbar;