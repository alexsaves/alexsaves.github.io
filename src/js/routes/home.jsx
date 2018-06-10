import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

/**
* Handles resetting the password
*/
class HomeComponent extends React.Component {

  /**
 * Constructor for the finish signup component
 */
  constructor(props) {

    super(props);
  }

  /**
 * Fires after the component renders
 */
  componentDidMount() {}

  /**
 * Render the view
 */
  render() {
    return (
      <div className="hero">
        <div className="hero--content">
          <h1>Alexei White</h1>
          <h2>Full-stack software developer, leader, and author</h2>
          <hr align="left" />
          <p className="sociallinks">
            <a href="https://www.linkedin.com/in/alexeiwhite/" target="_blank" className="sociallinks--li"></a>
            <a href="https://twitter.com/AlexeiRWhite" target="_blank" className="sociallinks--tw"></a>
            <a href="https://github.com/alexsaves" target="_blank" className="sociallinks--gh"></a>
            <a href="https://stackoverflow.com/users/381458/whitehawk" target="_blank" className="sociallinks--so"></a>
            <a href="mailto:alexei.white@gmail.com" target="_blank" className="sociallinks--em"></a>
          </p>
          <p className="pubs">
            <a href="https://www.amazon.com/JavaScript-Programmers-Reference-Alexei-White/dp/0470344725" target="_blank" className="pubs--jsr" title="JavaScript Programmers Reference - Wrox (Wiley)"></a>
            <a href="https://www.amazon.com/Enterprise-AJAX-Strategies-Performance-Applications/dp/0132242060" target="_blank" className="pubs--ajax" title="Enterprise Ajax - Pearson"></a>
            <a href="https://www.amazon.com/Enterprise-Ajax-LiveLessons-Video-Training/dp/0137132603" target="_blank" className="pubs--ajaxaudio" title="Enterprise Ajax Audio LiveLessons - Pearson"></a>
          </p>
        </div>
      </div>
    );
  }
}

// Expose it
export default HomeComponent;