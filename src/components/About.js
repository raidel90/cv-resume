import React, { Component } from "react";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      // var profilepic = `${process.env.PUBLIC_URL}/images/` + this.props.sharedBasicInfo.image;
      var emailIcon = `${process.env.PUBLIC_URL}/images/email.png`;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      // var hello = this.props.resumeBasicInfo.description_header;
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
      <section id="about" style={{ paddingBottom: "200px", paddingTop: "300px" }}>
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>

          <h1 className='title-styles' style={{ padding: '3vw 12vw 3vw 12vw', textAlign: 'justify' }}> {about} </h1>


          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                {/* <span style={{ cursor: "auto" }}>
                  <img
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <img
                    src={emailIcon}
                    alt="Avatar placeholder"
                    />
                </span>*/}
              </div>
            </div>
            <div className="col-md-8 center">
              <div className="col-md-10">
              <div className="col-md-10">
              {/* <div className="card text-white bg-dark">
                <div
                  className="card-header --blue "
                  style={{ "textAlign": "left" }}
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
              </div> */}
            </div>
              </div>
            </div>{" "}
            <span id="aboutNetworks" className="social-links lg" style={{'fontSize':'35px'}}>{networks}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
