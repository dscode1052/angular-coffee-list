import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllCoffee } from 'src/app/state/coffee/coffee.actions';
import { selectAllCoffee } from 'src/app/state/coffee/coffee.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-coffee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  @Input()
  public allCoffee$ = this.store.select(selectAllCoffee);  

  firstIndex: number = 0;
  currentPageIndex: number = 0;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadAllCoffee())
  }

  getArrayFromNumber(length: number) {
    return new Array(length/10);
  }

  updateIndex(pageIndex: number) {
    if(pageIndex < 0) {
     return;
    } else if(pageIndex > 4) {
     return;
    } else{
      this.currentPageIndex = pageIndex      
    }    
    this.firstIndex = pageIndex * 10;   
  }
}
