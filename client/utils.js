// client/utils.js
// This file contains some helper functions and structures.

'use strict';

import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

// This contains a mapping of integers to their alphabetical representations.
export const intToAlpha = {
  1: 'ONE', 2: 'TWO', 3: 'THREE', 4: 'FOUR',
  5: 'FIVE', 6: 'SIX', 7: 'SEVEN', 8: 'EIGHT',
  9: 'NINE', 10: 'TEN', 11: 'ELEVEN', 12: 'TWELVE',
  13: 'THIRTEEN', 14: 'FOURTEEN', 15: 'FIFTEEN', 16: 'SIXTEEN'
};

// Creates a single row of pads
export function createPadRow(padAmount, start, color) {
  let row = [];

  //row.push(<Grid.Row columns={padAmount}>);

  for (let i = start; i <= padAmount; i++) {
    row.push(
      <Grid.Column key={i}>
        <Button
          name={`pad-button-${i}`}
          basic color={color}
          content={intToAlpha[i]} />
      </Grid.Column>
    );
  }

  //row.push(</Grid.Row>);

  return row;
}
