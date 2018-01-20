// store/samples.js
// This file contains the reducer for our drum pads.

'use strict';

import axios from 'axios';

// Action types
const GET_SAMPLES = 'GET_SAMPLES';

// Action creators
export function getSamplesAction(samples) {
  return {
    type: GET_SAMPLES,
    samples
  };
}

// Thunk creators
export function getSampleList() {
  return function thunk(dispatch) {
    return axios.get('/api/samples/')
      .then(res => res.data)
      .then(samples => {
        const action = getSamplesAction(samples);
        dispatch(action);
      })
      .catch(console.error);
  }
}

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_SAMPLES:
      return action.samples;
    default:
      return state;
  }
}
