import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

/**
* Handles the project badge
*/
class ProjectBadge extends React.Component {

  /**
 * Constructor for the finish signup component
 */
  constructor(props) {
    super(props);
  }

  /**
 * Fires after the component renders
 */
  componentDidMount() {

  }

  /**
 * Render the view
 */
  render() {
    return (
      <a className="project--badge" href={this.props.link} target="_blank">
        <div className="project--badge-interior">
          <div className="project--badge-name">{this.props.name}</div>
          <div className="project--badge-desc">{this.props.desc}</div>
          <div className="project--badge-tech">
            {this.props.tech.map((tk) => {
              return <span key={tk}>{tk}</span>;
            })}
          </div>
        </div>
      </a>
    );
  }
}

// Expose it
export default ProjectBadge;