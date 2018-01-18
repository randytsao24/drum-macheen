// client/components/pad-grid.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Menu, Grid } from 'semantic-ui-react';
import { createPadRow } from '../utils';

/**
 * COMPONENT
 */
export const CartItem = (props) => {

  let padRow = createPadRow(4, 1, 'blue');

  return props.product && (
    <Grid>
      <Grid.Row columns={4}>
        {padRow}
      </Grid.Row>
    </Grid>
  )
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

export default connect(mapStateToProps)(CartItem)
