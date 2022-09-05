import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { 
  loadAllCoffee, 
  loadAllCoffeeSuccess,
  loadAllCoffeeFailure,
} from './coffee.actions';
import { CoffeeService } from 'src/app/services/coffee.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class CoffeeEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private coffeeService: CoffeeService,
  ) {}

  // Run this code when a loadCoffee action is diapatched
  loadAllCoffee$ = createEffect(() => 
    this.action$.pipe(
      ofType(loadAllCoffee),
      switchMap(() =>
        // Call the getAllCoffee(), convert it to an observable 
        from(this.coffeeService.getAllCoffee()).pipe(
          // Take the returned value and return a new success action containing the coffee
          map((coffee) => loadAllCoffeeSuccess({ coffee: coffee })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadAllCoffeeFailure({ error })))
        )
      )
    )
  );
}