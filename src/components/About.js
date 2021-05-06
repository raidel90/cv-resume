import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black", "padding-top": "200px" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 center">
              <div className="col-md-10">
              <div
              className="col-md-10"
     
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
                    fontSize: "13px",
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
            </div>{" "}
            <span className="social-links lg" style={{'font-size':'35px'}}>{networks}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
