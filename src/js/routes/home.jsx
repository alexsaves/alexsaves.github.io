import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ReactWindowResizeListener from 'window-resize-listener-react';
import ProjectBadge from './projectbadge.jsx';

/**
* Handles resetting the password
*/
class HomeComponent extends React.Component {

  /**
 * Constructor for the finish signup component
 */
  constructor(props) {

    super(props);
    this.state = {
      isShort: this.isFrameShort()
    };
  }

  /**
 * Fires after the component renders
 */
  componentDidMount() {
    this.updateFrameSize();
  }

  /**
   * Is the frame short?
   */
  isFrameShort() {
    return window.innerHeight < 560;
  }

  /**
   * Update the frame size
   */
  updateFrameSize() {
    var isFrShort = this.isFrameShort();
    if (isFrShort != this.state.isShort) {
      this.setState({isShort: isFrShort});
    }
  }

  /**
 * Render the view
 */
  render() {
    var projects = [
      {
        name: "sparseheatmap",
        desc: "A high-speed heatmap generator using sparse matrices for NodeJS",
        link: "https://github.com/alexsaves/sparseheatmap",
        tech: ["NodeJS", "C++", "gyp"]
      }, {
        name: "loadtest-webui",
        desc: "Front-end for load testing built on Alex Fernandez loadtest.",
        link: "https://github.com/alexsaves/loadtest-webui",
        tech: ["NodeJS", "Load Testing", "AWS"]
      }, {
        name: "gulp-promise",
        desc: "Ensure reliable callbacks of multiple streams within a task.",
        link: "https://github.com/alexsaves/gulp-promise",
        tech: ["NodeJS", "Gulp"]
      }, {
        name: "gulp-wrappy",
        desc: "Lightweight way to wrap your output with some other contents.",
        link: "https://github.com/alexsaves/gulp-wrappy",
        tech: ["NodeJS", "Gulp"]
      }, {
        name: "gulp-bufferize",
        desc: "Pipes a gulp stream to a Vinyl file object with a buffer that you can manipulate" +
            ". A replacement for disk writing.",
        link: "https://github.com/alexsaves/gulp-bufferize",
        tech: ["NodeJS", "Gulp"]
      }, {
        name: "gulp-pragma",
        desc: "A Gulp plugin to optionally remove pragma comments from your code that follow a " +
            "particular pattern. Useful for JavaScript builds.",
        link: "https://github.com/alexsaves/gulp-pragma",
        tech: ["NodeJS", "Gulp"]
      }, {
        name: "node-svnsync",
        desc: "A convenient node plugin for syncing an SVN repository with a local folder.",
        link: "https://github.com/alexsaves/node-svnsync",
        tech: ["NodeJS", "SVN"]
      }, {
        name: "node-filemunge",
        desc: "Node toolkit for recursively working with entire file trees.",
        link: "https://github.com/alexsaves/node-filemunge",
        tech: ["NodeJS", "OS"]
      }, {
        name: "gulp-jsmodule",
        desc: "Gulp plugin for reconciling AMD dependency trees in JavaScript projects.",
        link: "https://github.com/alexsaves/gulp-jsmodule",
        tech: ["NodeJS", "AMD", "Gulp"]
      }, {
        name: "bity-promise",
        desc: "Super simple promises (with timeouts!) for Node",
        link: "https://github.com/alexsaves/bity-promise",
        tech: ["Async", "Proms", "Conc."]
      }, {
        name: "gulp-jsonp",
        desc: "JSONP Wrapper for Gulp for packaging JavaScript modules",
        link: "https://github.com/alexsaves/gulp-jsonp",
        tech: ["NodeJS", "JSONP"]
      }, {
        name: "handydevserver",
        desc: "A simple web server with handy features, fake latency, and hooks for test enviro" +
            "nments",
        link: "https://github.com/alexsaves/handydevserver",
        tech: ["NodeJS", "Testing"]
      }, {
        name: "CefGlueHeadless",
        desc: "A fully headless client for CefGlue/3 in C# and async-await useful for automatio" +
            "n",
        link: "https://github.com/alexsaves/CefGlueHeadless",
        tech: ["C#", "CEF", "Chrome"]
      }
    ];
    return (
      <div
        className={"overall " + (this.state.isShort
        ? "short"
        : "")}>
        <div className="hero--lowtide">
          <p className="sociallinks">
            <a
              href="https://www.linkedin.com/in/alexeiwhite/"
              target="_blank"
              className="sociallinks--li"></a>
            <a
              href="https://twitter.com/AlexeiRWhite"
              target="_blank"
              className="sociallinks--tw"></a>
            <a
              href="https://github.com/alexsaves"
              target="_blank"
              className="sociallinks--gh"></a>
            <a
              href="https://stackoverflow.com/users/381458/whitehawk"
              target="_blank"
              className="sociallinks--so"></a>
            <a
              href="mailto:alexei.white@gmail.com"
              target="_blank"
              className="sociallinks--em"></a>
          </p>
          <div className="alexei--avatar"></div>
          <div className="hero--content">
            <h1>Alexei White</h1>
            <h2>Full-stack software developer, leader, and author</h2>
            <div className="pubs">
              <a
                href="https://www.amazon.com/JavaScript-Programmers-Reference-Alexei-White/dp/0470344725"
                target="_blank"
                className="pubs--jsr"
                title="JavaScript Programmers Reference - Wrox (Wiley)"></a>
              <a
                href="https://www.amazon.com/Enterprise-AJAX-Strategies-Performance-Applications/dp/0132242060"
                target="_blank"
                className="pubs--ajax"
                title="Enterprise Ajax - Pearson"></a>
              <a
                href="https://www.amazon.com/Enterprise-Ajax-LiveLessons-Video-Training/dp/0137132603"
                target="_blank"
                className="pubs--ajaxaudio"
                title="Enterprise Ajax Audio LiveLessons - Pearson"></a>
            </div>
            <div className="design--space">
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero--content">
            <h1>Alexei White</h1>
            <h2>Full-stack software developer, leader, and author</h2>
            <hr align="left"/>
            <p className="sociallinks">
              <a
                href="https://www.linkedin.com/in/alexeiwhite/"
                target="_blank"
                className="sociallinks--li"></a>
              <a
                href="https://twitter.com/AlexeiRWhite"
                target="_blank"
                className="sociallinks--tw"></a>
              <a
                href="https://github.com/alexsaves"
                target="_blank"
                className="sociallinks--gh"></a>
              <a
                href="https://stackoverflow.com/users/381458/whitehawk"
                target="_blank"
                className="sociallinks--so"></a>
              <a
                href="mailto:alexei.white@gmail.com"
                target="_blank"
                className="sociallinks--em"></a>
            </p>
            <p className="pubs">
              <a
                href="https://www.amazon.com/JavaScript-Programmers-Reference-Alexei-White/dp/0470344725"
                target="_blank"
                className="pubs--jsr"
                title="JavaScript Programmers Reference - Wrox (Wiley)"></a>
              <a
                href="https://www.amazon.com/Enterprise-AJAX-Strategies-Performance-Applications/dp/0132242060"
                target="_blank"
                className="pubs--ajax"
                title="Enterprise Ajax - Pearson"></a>
              <a
                href="https://www.amazon.com/Enterprise-Ajax-LiveLessons-Video-Training/dp/0137132603"
                target="_blank"
                className="pubs--ajaxaudio"
                title="Enterprise Ajax Audio LiveLessons - Pearson"></a>
            </p>
          </div>
        </div>
        <div className="main">
          <div className="main--content">
            <p className="alexeiavatar"></p>
            <p className="main--content-heading">
              Alexei is an experienced software engineering manager (and author!) with deep
              technical skills who specializes in building high-performaning dev teams. I love
              the web, building end-to-end applications, and I <u>really</u> love JavaScript!
            </p>
            <p>
              Over the past few years, I've been <a target="_blank" href="https://www.foresee.com">
                designing web and mobile SDK's</a> for studying visitor behavior on websites and mobile apps. I also ran (with my
              cofounder) a startup for several years, trying to engage people at conferences
              through real-time analysis of textual data from surveys and Twitter - and we did
              events all over the US and Canada.
            </p>
            <div className="p wide">
              <div className="arrow--p"></div>
              I wrote a couple books about JavaScript which you'll find over here - although
              these days I'm a little more interested in building things than writing about
              building them :).
            </div>
            <div className="p short">
              <div className="arrow--p"></div>
              I wrote a couple books about JavaScript - although
              these days I'm a little more interested in building things than writing about
              building them :).
            </div>
            <p>
              I'm currently based in the Bay Area, but originally from Vancouver, Canada.
            </p>
            <p>
              Here are some recent O/S contributions - click to explore:
            </p>
            <div className="p projects--area">
              {projects.map((pj) => {
                return <ProjectBadge key={pj.name} {...pj}/>;
              })}
            </div>
          </div>
        </div>
        <ReactWindowResizeListener
          onResize={this
          .updateFrameSize
          .bind(this)}/>
      </div>
    );
  }
}

// Expose it
export default HomeComponent;