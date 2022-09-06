import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAllCoffee } from 'src/app/state/coffee/coffee.selectors';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  currentCoffee: Coffee = {};  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
  ) {}  

  ngOnInit(): void {  
    this.getCoffee(this.route.snapshot.params["id"]);     
  }

  BackToList(): void {
    this.router.navigate(['/coffeeList']);
  }

  getCoffee(uid: string) {      
    this.store.select(selectAllCoffee).subscribe((items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].uid === uid) {
          this.currentCoffee = items[i];          
        }     
      }      
    }); 
  }

}
