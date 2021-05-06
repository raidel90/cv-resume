import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import Scrollspy from "react-scrollspy";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }
    if (this.props.resumeBasicInfo) {
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <section id="home">
        <header
          id="home"
          style={{ height: window.innerHeight - 140, display: "block" }}
        >
          <div className="row aligner" style={{ height: "100%" }}>
            <div className="col-md-12">
              <div>
                <span
                  className="iconify header-icon"
                  data-icon="la:laptop-code"
                  data-inline="false"
                ></span>
                <br />
                <h1 className="mb-0">
                  <Typical steps={[name]} wrapper="p" />
                </h1>
                <div className="title-container">
                  <HeaderTitleTypeAnimation />
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              style={{
                width: "90% ",
              }}
            >
              <div className="card text-white bg-dark">
                <div
                  className="card-header --blue "
                  style={{ "text-align": "left" }}
                >
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    width: "90% ",
                    fontSize: "152%",
                    lineHeight: "200%",
                    font:
                      "monospace, Andale Mono, Lucida Console, Monaco, fixed ",
                  }}
                >
                  <span className="wave">{hello} :) </span>
                  <br />
                  <span
                    className=""
                    style={{
                      color: "#5ab32e",
                    }}
                  >
                    raidel@full-stack-developer:~$ {"  "}
                  </span>

                  {about}
                  <span className="parpadea strong">__</span>
                </div>
              </div>
            </div>
          </div>
        </header>{" "}
      </section>
    );
  }
}

export default Header;
