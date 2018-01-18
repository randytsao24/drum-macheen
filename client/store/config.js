// store/column.js
// This file contains the reducer for the selected amount
// of columns for the drum pads.

'use strict';

import axios from 'axios';

// Action types
const GET_CONFIGS = 'GET_CONFIGS';

// Action creators
export function getConfigsAction(configs) {
  return {
    type: GET_CONFIGS,
    configs
  };
}

// Thunk creators
export function getConfigurations() {
  return function thunk(dispatch) {
    return axios.get('/api/configs/')
      .then(res => res.data)
      .then(configs => {
        const action = getConfigsAction(pads);
        dispatch(action);
      })
      .catch(console.error);
  }
}

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CONFIGS:
      return action.configs;
    default:
      return state;
  }
}
