(this["webpackJsonpcv-resume"]=this["webpackJsonpcv-resume"]||[]).push([[0],{46:function(e,a,t){},47:function(e,a,t){},58:function(e,a,t){e.exports=t(93)},63:function(e,a,t){},64:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(15),r=t.n(i),c=(t(63),t(7)),l=t(8),o=t(23),m=t(10),d=t(9),u=t(37),p=t.n(u),f=(t(64),t(40)),h=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(o.a)(e)),e}return Object(l.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;var i=s.a.memo((function(){return s.a.createElement(f.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return s.a.createElement("section",{id:"home"},s.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(f.a,{steps:[a],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(i,null)))),s.a.createElement("div",{className:"col-md-6",style:{width:"90% "}},s.a.createElement("div",{className:"card text-white bg-dark"},s.a.createElement("div",{className:"card-header --blue ",style:{textAlign:"left"}},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",width:"90% ",fontSize:"152%",lineHeight:"200%",font:"monospace, Andale Mono, Lucida Console, Monaco, fixed "}},s.a.createElement("span",{className:"wave"},t," :) "),s.a.createElement("br",null),s.a.createElement("span",{className:"",style:{color:"#5ab32e"}},"raidel@full-stack-developer:~$ ","  "),n,s.a.createElement("span",{className:"parpadea strong"},"__"))))))," ")}}]),t}(n.Component),g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"social-links"},e),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="".concat("/cv-resume","/images/")+this.props.sharedBasicInfo.image,a="".concat("/cv-resume","/images/email.png");if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,n=this.props.resumeBasicInfo.description_header,i=this.props.resumeBasicInfo.description;if(this.props.sharedBasicInfo)var r=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black",paddingTop:"200px"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"}),s.a.createElement("img",{src:a,alt:"Avatar placeholder"})))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card text-white bg-dark"},s.a.createElement("div",{className:"card-header --blue ",style:{textAlign:"left"}},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",width:"90% ",fontSize:"13px",font:"monospace, Andale Mono, Lucida Console, Monaco, fixed "}},s.a.createElement("span",{className:"wave"},n," :) "),s.a.createElement("br",null),s.a.createElement("span",{className:"",style:{color:"#5ab32e"}},"raidel@full-stack-developer:~$ ","  "),i,s.a.createElement("span",{className:"parpadea strong"},"__"))))))," ",s.a.createElement("span",{className:"social-links lg",style:{fontSize:"35px"}},r))))}}]),t}(n.Component),v=t(35),y=(t(71),t(38)),b=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies,n=e.mainTech.map((function(e,a){return s.a.createElement(y.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)})),i=t.map((function(e,a){return s.a.createElement(y.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return s.a.createElement(v.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-clock experience-icon"}),key:a},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return s.a.createElement("section",{id:"resume",className:"",style:{paddingBottom:"200px"}},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"},id:"resumeLink"},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(v.VerticalTimeline,null,a,s.a.createElement(v.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),N=t(95),k=t(45),w=t.n(k),x=t(46),j=t.n(x),I=t(47),L=t.n(I),S=(t(72),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,i=this.props.data.url;if(this.props.data.technologies){var r=e.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var c=a.map((function(e,a){return s.a.createElement("div",{key:a,"data-src":"/cv-resume/"+e})}))}}return s.a.createElement(N.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("div",{className:"slider-tab"},s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement(w.a,{cssModule:[j.a,L.a],animation:"scaleOutAnimation",className:"slider-image"},c)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,i?s.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("p",{className:"modal-description"},n),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},r)))))}}]),t}(n.Component)),O=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer",color:"#fbfbfb !important"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},s.a.createElement("div",{style:{background:"#1f1f1f"}},s.a.createElement("div",{className:"col-md-12 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("img",{src:"/cv-resume/"+a.images[0],alt:"projectImages",height:"auto",style:{marginBottom:0,paddingBottom:0,position:"relative"}})),s.a.createElement("span",{className:"project-date"},a.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3",style:{cursor:"pointer",color:"#fbfbfb !important"}},a.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,a)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},t)),s.a.createElement(S,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),B=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){var t=e.svg?s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.svg}}):s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}}," ",e.name," "));return s.a.createElement("li",{className:"list-inline-item mx-3 stage",key:a},s.a.createElement("span",{className:""},s.a.createElement("div",{className:"text-center skills-tile box  ".concat((function(){}))},t)))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),C=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).toggleCollapse=function(){n.setState({isOpen:!n.state.isOpen})},n.handleScroll=function(e){for(var a=e.target.scrollTop,t=n.state.sections,s=t.length-1,i=0;i<s;i++)a>t[i].offsetTop-20&&a<t[i+1].offsetTop-20&&n.setState({active:i});console.log("scrollTop"),a>t[s].offsetTop-20&&n.setState({active:s})},n.state={foo:"bar",sections:[],resumeData:{},sharedData:{}},n.handleScroll=n.handleScroll.bind(Object(o.a)(n)),n.scrollSpyText=s.a.createRef(),n.scrollSpyTextBasic=s.a.createRef(),n}return Object(l.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId);this.setState({sections:["skills","about","resume"]})}},{key:"loadResumeFromPath",value:function(e){p.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){p.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(h,{sharedData:this.state.sharedData.basic_info,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},s.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"}},s.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-states","data-inline":"false",id:window.$primaryLanguageIconId})),s.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"}},s.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-spain","data-inline":"false",id:window.$secondaryLanguageIconId}))),s.a.createElement(B,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(b,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(E,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(O,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(73);var _=t(56),D=t(52),$=t.n(D),R=t(97),M=t(96),P=t(53),z=t.n(P),W=function(){var e=Object(n.useState)(!1),a=Object(_.a)(e,2),t=a[0],i=a[1];return s.a.createElement("div",null,s.a.createElement(R.a,{expand:"lg",bg:"dark",variant:"dark",style:{fontSize:"12px",paddingRight:"20%"},fixed:"top"},s.a.createElement(R.a.Brand,{href:"#home"},s.a.createElement($.a,{checked:t,onChange:function(){i(!t),function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}()},offColor:"#8a8999",onColor:"#8a8999",className:"react-switch mx-auto",width:80,height:30,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto:full-moon-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"15px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})),s.a.createElement(R.a.Toggle,{"aria-controls":"responsive-navr-nav"}),s.a.createElement(R.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(M.a,{className:"mr-auto"},s.a.createElement(M.a.Link,{href:"#features"})),s.a.createElement(z.a,{componentTag:"div",className:"scrollspys menu navbar-var navbarTest",items:["home","skills","resume","about","portfolio"],currentClassName:"active"},s.a.createElement(M.a.Link,{id:"startMenu",href:"#home"},"\xa0\xa0HOME\xa0\xa0"),s.a.createElement(M.a.Link,{href:"#skills",style:{paddingRight:"8%",paddingLeft:"8%"}}," \xa0\xa0SKILLS\xa0\xa0"),s.a.createElement(M.a.Link,{href:"#resumeLink",style:{paddingRight:"8%",paddingLeft:"8%"}},"\xa0\xa0EXPERIENCE\xa0\xa0"),s.a.createElement(M.a.Link,{href:"#about",style:{paddingRight:"8%",paddingLeft:"8%"}},"\xa0\xa0ABOUT\xa0\xa0"),s.a.createElement(M.a.Link,{href:"#portfolio",style:{paddingRight:"8%",paddingLeft:"8%"}}," \xa0\xa0PROJECTS\xa0\xa0")))))};window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(s.a.createElement(C,null),document.getElementById("root")),r.a.render(s.a.createElement(W,null),document.getElementById("headCorner")),function(e){if("serviceWorker"in navigator){if(new URL("/cv-resume",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/cv-resume","/service-worker.js");A?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(a,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.0feffaff.chunk.js.map