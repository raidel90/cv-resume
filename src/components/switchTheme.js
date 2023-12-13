import React, { useState } from "react";
//import Typical from "react-typical";
import Switch from "react-switch";
import { Nav, Navbar } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

const SwitchTheme = () => {
  const [checked, setChecked] = useState(false);

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };
  const onThemeSwitchChange = () => {
    setChecked(!checked);
    setTheme();
  };
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ "fontSize": "12px", "paddingRight": "20%" }}
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <Switch
            checked={checked}
            onChange={onThemeSwitchChange}
            offColor="#8a8999"
            onColor="#8a8999"
            className="react-switch mx-auto"
            width={80}
            height={30}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="noto:full-moon-face"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "15px",
                  color: "#353239",
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}
              ></span>
            }
            id="icon-switch"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navr-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
          </Nav>

          <Scrollspy
          componentTag="div"
          className="scrollspys menu navbar-var navbarTest"
          items={[ "home","skills", "resume", "about"]}
          // items={[ "home","skills", "resume", "about", "portfolio"]}
          currentClassName="active"
        >
              <Nav.Link id="startMenu" href="#home">
                &nbsp;&nbsp;HOME&nbsp;&nbsp;
              </Nav.Link>

              <Nav.Link
                href="#skills"
                style={{ "paddingRight": "8%", "paddingLeft": "8%" }}
              > &nbsp;&nbsp;SKILLS&nbsp;&nbsp;
              </Nav.Link>

              <Nav.Link
                href="#resume"
                style={{ "paddingRight": "8%", "paddingLeft": "8%" }}
              >&nbsp;&nbsp;EXPERIENCE&nbsp;&nbsp;
              </Nav.Link>


              <Nav.Link
                href="#aboutNetworks"
                style={{ "paddingRight": "8%", "paddingLeft": "8%" }}
              >&nbsp;&nbsp;ABOUT&nbsp;&nbsp;
              </Nav.Link>


              {/* <Nav.Link
                href="#portfolio"
                style={{ "paddingRight": "8%", "paddingLeft": "8%" }}
              > &nbsp;&nbsp;PROJECTS&nbsp;&nbsp;
              </Nav.Link> */}


          </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SwitchTheme;
