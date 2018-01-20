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

    this.state = {
      keyToSample: []
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(sampleId) {
    let audio = new Audio('Samples/' + this.props.samples[sampleId].name);
    audio.play();
  }

  handleKeyDown(event) {
    let audio;
    let keyPress = event.key;
    let playingPad = this.props.pads.find(pad => pad.assignedKey === keyPress);

    console.log("Key pressed:", keyPress);

    // Play sample associated with the key (pad) that was just pressed
    if (playingPad) {
      this.playAudio(playingPad.sampleId);
    }
  }

  handleClick(event) {
    let padClicked = this.props.pads.find(pad => pad.id === event.target.value);
    console.log("just clicked:", padClicked);
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
    const sortedPads = this.props.pads ? this.props.pads.sort((a, b) => a.position - b.position) : null;

    console.log("sortedPads:", sortedPads);

    this.initializePads();

    return this.props.pads && (
      <Grid onKeyDown={this.handleKeyDown} className='grid-container' columns={this.props.config && this.props.config.columnAmount}>
      {
        sortedPads.map((pad, index) => (
          <Grid.Column className='grid-column' key={pad.id}>
            {index + 1}
            <Button fluid size='massive'
              key={pad.id}
              value={pad.id}
              basic color={pad.color}
              content={`${intToAlpha[pad.position]}: ${pad.sampleId}\nKey: ${pad.assignedKey}`}
              tabIndex={0}
              onClick={this.handleClick} />
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
    config: state.configs[0],
    samples: state.samples
  };
}

export default connect(mapStateToProps)(PadGrid);
