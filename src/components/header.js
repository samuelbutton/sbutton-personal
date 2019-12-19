import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>Samuel Button</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["resume", "projects", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#resume" onClick={Scroller.handleAnchorScroll}>Resume</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#projects" onClick={Scroller.handleAnchorScroll}>Projects</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
// "fas fa-4x fa-github text-primary mb-4"