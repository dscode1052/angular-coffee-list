import { Component, Input, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {
  uid: string = '';

  @Input() 
  currentCoffee: Coffee = {
    uid: '',
    blend_name: '',
    origin: '',
    variety: '',
    notes: '',
    intensifier: ''
  };  
  
  constructor(
    private coffeeService: CoffeeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
  ) { }  

  ngOnInit(): void {     
    this.getCoffee(this.route.snapshot.params["uid"]); 
  }

  BackToList(): void {
    this.router.navigate(['/coffeeList']);
  }

  getCoffee(uid: string): void {
    this.coffeeService.getCoffee(uid)
      .subscribe({
        next: (data) => {
          this.currentCoffee = data;          
        },
        error: (e) => console.error(e)        
      });
  }    
}
