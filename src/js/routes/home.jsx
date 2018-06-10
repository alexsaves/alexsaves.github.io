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
  componentDidMount() {
    
  }

  /**
 * Render the view
 */
  render() {
    return (
      <div>Hi there</div>
    );
  }
}

// Expose it
export default HomeComponent;