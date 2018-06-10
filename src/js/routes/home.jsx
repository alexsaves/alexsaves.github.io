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
      <div className="overall">
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
            <p className="main--content-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ipsum non
              sodales consequat. Morbi gravida tortor porta fringilla tincidunt. Etiam erat
              arcu, finibus id dolor in, efficitur dignissim ligula. Sed risus nisi, vehicula
              quis odio id, molestie congue eros. Aenean vehicula tellus vel enim molestie,
              eget suscipit nunc placerat.
            </p>
            <p>
              In euismod metus in ipsum commodo rhoncus. Quisque at est nec risus pellentesque
              pharetra. Vivamus tincidunt magna quam, nec feugiat nisi faucibus quis. Nunc id
              pellentesque ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Morbi blandit, nunc nec imperdiet varius, nisl
              purus rutrum urna, in sollicitudin sapien nunc at massa. Quisque suscipit tellus
              ac ligula tristique rhoncus. Sed tempus lacinia erat id pellentesque. Vivamus
              sed varius elit.
            </p>
            <p>
              Phasellus a metus in dui facilisis consequat non sed est. Integer eleifend augue
              et neque porta lacinia. Praesent iaculis pulvinar tincidunt. Vivamus mattis eu
              elit vitae sodales. Integer lorem leo, faucibus at neque vitae, gravida luctus
              neque. Donec ac magna placerat enim ullamcorper iaculis sed non tellus. Aenean
              imperdiet gravida varius.
            </p>
            <p>
              Proin volutpat aliquet est, at tempus enim cursus fermentum. Mauris quis felis
              hendrerit, egestas ex vitae, ullamcorper nulla. Praesent nisl libero, euismod ac
              ligula eu, cursus auctor augue. In euismod urna eget semper semper. Vivamus
              suscipit venenatis ex malesuada aliquet. Ut non fringilla velit. Sed eget rutrum
              quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Ut nec tincidunt ligula. Praesent quis leo tempus, elementum
              nulla eget, efficitur sem.
            </p>
            <p>
              Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Aliquam sed arcu venenatis elit congue gravida.
              Quisque sed ligula vel tortor blandit tempus. Quisque id porta lorem. Quisque
              aliquam eleifend quam, ac sagittis sem sodales eu. Duis porttitor molestie
              augue, eu cursus est placerat vel. Curabitur vitae ipsum et risus accumsan
              tincidunt. Curabitur sit amet libero sem. Nunc pellentesque suscipit auctor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// Expose it
export default HomeComponent;