import { createAction, props } from '@ngrx/store';
import { Coffee } from 'src/app/models/coffee.model';

// All Coffee
export const loadAllCoffee = createAction('[Coffee Page] Load All Coffee');
export const loadAllCoffeeSuccess = createAction(
  '[Coffee API] All Coffee Load Success',
  props<{coffee: Coffee[]}>()
);
export const loadAllCoffeeFailure = createAction (
  '[Coffee API] All Coffee Load Failure',
  props<{error: string}>()
);