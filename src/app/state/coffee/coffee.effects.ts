import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { 
  loadAllCoffee, 
  loadAllCoffeeSuccess,
  loadAllCoffeeFailure,
} from './coffee.actions';
import { CoffeeService } from 'src/app/services/coffee.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class CoffeeEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private coffeeService: CoffeeService,
  ) {}

  loadAllCoffee$ = createEffect(() => 
    this.action$.pipe(
      ofType(loadAllCoffee),
      switchMap(() =>
        from(this.coffeeService.getAllCoffee()).pipe(
          map((coffee) => loadAllCoffeeSuccess({ coffee: coffee })),
          catchError((error) => of(loadAllCoffeeFailure({ error })))
        )
      )
    )
  );
}