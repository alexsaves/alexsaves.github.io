import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ReactWindowResizeListener from 'window-resize-listener-react';

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
      this.setState({
        isShort: isFrShort
      });
    }
  }

  /**
 * Render the view
 */
  render() {
    return (
      <div className={"overall " + (this.state.isShort ? "short" : "")}>
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
              the web, and I <u>really</u> love JavaScript!
            </p>
            <p>
              Over the past few years, I've been <a target="_blank" href="https://www.foresee.com"> designing web and mobile SDK's</a>
              for studying visitor behavior on websites and mobile apps. I also ran (with my cofounder) a startup
              for several years, trying to engage people at conferences through real-time
              analysis of textual data from surveys and Twitter - and we did events all over
              the US and Canada.
            </p>
            <p>
              <div class="arrow--p"></div>
              I wrote a couple books about JavaScript which you'll find over here - although these days I'm a little more interested in building things than writing about building them :).
            </p>
            <p>
              I'm currently based in the Bay Area, but originally from Vancouver, Canada.
            </p>
            <p>
              Here are some recent O/S contributions:
            </p>
          </div>
        </div>
        <ReactWindowResizeListener onResize={this.updateFrameSize.bind(this)} />
      </div>
    );
  }
}

// Expose it
export default HomeComponent;