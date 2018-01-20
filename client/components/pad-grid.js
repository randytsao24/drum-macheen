// client/components/pad-grid.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Grid } from 'semantic-ui-react';
import { intToAlpha } from '../utils';

/**
 * COMPONENT
 */

class PadGrid extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    let audio;

    console.log("Key pressed:", event.key);

    // TEST: play a sound if '1' is pressed
    if (event.key === '1') {
      audio = new Audio('Samples/clap-808.wav');
      audio.play();
    }
  }

  // Set up event listeners for keyboard strokes according to
  // pad's assigned key and assign sample
  initializePads() {
    if (this.props.pads.length) {
      for (let i = 1; i <= this.props.pads.length; i++) {
        document.addEventListener('keydown', this.handleKeyDown, false);
      }
    }
  }

  render() {

    this.initializePads();

    return this.props.pads && (
      <Grid onKeyDown={this.handleKeyDown} className='grid-container' columns={this.props.config && this.props.config.columnAmount}>
      {
        this.props.pads.map(pad => (
          <Grid.Column className='grid-column' key={pad.id}>
            <Button fluid size='massive'
              key={pad.id}
              basic color={pad.color}
              content={intToAlpha[pad.id]}
              tabIndex={0} />
          </Grid.Column>
        ))
      }
      </Grid>
    );
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    pads: state.pads,
    config: state.configs[0]
  };
}

export default connect(mapStateToProps)(PadGrid);
