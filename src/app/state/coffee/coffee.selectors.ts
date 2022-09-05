import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CoffeeState } from './coffee.reducers';

export const selectCoffee = (state: AppState) => state.coffee;

export const selectAllCoffee = createSelector(
  selectCoffee,
  (state: CoffeeState) => state.coffee
);

