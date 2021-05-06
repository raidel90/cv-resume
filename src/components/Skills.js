import React, { Component } from "react";

class Skills extends Component {
  
  // let squares = document.querySelectorAll(".square");

  // let =setInterval(() => {
  //   squares.forEach((square) => {
  //     square.classList.toggle("xyz-in");
  //     square.classList.toggle("xyz-out");
  
  //   });
  // }, 2200);

  render() {

    
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
     
        let iconSkill=skills.svg?<div dangerouslySetInnerHTML={{ __html: skills.svg  }} />:<i className={skills.class} style={{ fontSize: "220%" }}><p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }} > {skills.name} </p></i>; 
  


        return (
          <li className="list-inline-item mx-3 stage" key={i}>
            <span className="" >
              <div className={`text-center skills-tile box  ${(()=>{'bounce-6'})}`} >
                 {iconSkill}
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills"    >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
