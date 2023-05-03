import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 0, taxt: 'Learn HTML and CSS', completed: true },
    { id: 1, taxt: 'Get good at JavaScript', completed: true },
    { id: 2, taxt: 'Master React', completed: false },
    { id: 3, taxt: 'Discover Redux', completed: false },
    { id: 4, taxt: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
