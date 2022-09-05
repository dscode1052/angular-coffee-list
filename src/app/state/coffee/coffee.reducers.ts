import { createReducer, on } from '@ngrx/store';
import {
  loadAllCoffee,
  loadAllCoffeeSuccess,
  loadAllCoffeeFailure,
} from './coffee.actions';

import { Coffee } from 'src/app/models/coffee.model';

export interface CoffeeState {
  coffee: Coffee[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CoffeeState = {
  coffee: [],
  error: '',
  status: 'pending'
}

export const coffeeReducer = createReducer(
  // Supply the initial state
  initialState,

  // Trigger loading All coffee
  on(loadAllCoffee, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded coffee
  on(loadAllCoffeeSuccess, (state, { coffee }) => ({
    ...state,
    coffee: coffee,
    error: '',
    status: 'success',
  })),
  // Handle coffee load failure
  on(loadAllCoffeeFailure, (state, { error }) => ({
    ...state, 
    error: error,
    status: 'error',
  }))
);