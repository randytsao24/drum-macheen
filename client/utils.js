// client/utils.js
// This file contains some helper functions and structures.

'use strict';

import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

// intToAlpha contains a mapping of integers to their alphabetical representations.
export const intToAlpha = {
  1: 'ONE', 2: 'TWO', 3: 'THREE', 4: 'FOUR',
  5: 'FIVE', 6: 'SIX', 7: 'SEVEN', 8: 'EIGHT',
  9: 'NINE', 10: 'TEN', 11: 'ELEVEN', 12: 'TWELVE',
  13: 'THIRTEEN', 14: 'FOURTEEN', 15: 'FIFTEEN', 16: 'SIXTEEN'
};

// Create a row structure for pad buttons
export function createRowStructure(columnAmount, rowAmount) {
  let rowEnclosingComponents = [];

  for (let i = 1; i <= rowAmount; i++) {
    rowEnclosingComponents.push(<Grid.Row key={i} columns={rowAmount}>);
    rowEnclosingComponents.push(</Grid.Row>);
  }

  return rowEnclosingComponents;
}

// Creates a single row of pad buttons
export function createPadRowButtons(start, end, pads) {
  let row = [];

  // Each pad will be tied to ID, use iterator to traverse
  // through pad list and get corresponding color for each pad
  for (let i = start - 1; i < end; i++) {
    row.push(
      <Grid.Column className='grid-column' key={i}>
        <Button
          name={`pad-button-${i + 1}`}
          basic color={pads[i].color}
          content={intToAlpha[i + 1]} />
      </Grid.Column>
    );
  }

  return row;
}
