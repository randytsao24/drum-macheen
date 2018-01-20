// client/components/pad-container.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Grid } from 'semantic-ui-react';

/**
 * COMPONENT
 */

class PadContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentConfig: {}
    };
  }

  render() {

    return (
      <div className=''>
        
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    config: state.configs[0]
  };
}

export default connect(mapStateToProps)(PadContainer);
