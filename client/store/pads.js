// store/pads.js
// This file contains the reducer for our drum pads.

'use strict';

import axios from 'axios';

// Action types
const GET_PADS = 'GET_PADS';

// Action creators
export function getPadsAction(pads) {
  return {
    type: GET_PADS,
    pads
  };
}

// Thunk creators
export function getPadList() {
  return function thunk(dispatch) {
    return axios.get('/api/pads/')
      .then(res => res.data)
      .then(pads => {
        const action = getPadsAction(pads);
        dispatch(action);
      })
      .catch(console.error);
  }
}

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_PADS:
      return action.pads;
    default:
      return state;
  }
}
