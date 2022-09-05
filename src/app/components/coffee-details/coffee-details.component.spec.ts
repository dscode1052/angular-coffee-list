import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CoffeeDetailsComponent } from './coffee-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CoffeeService } from '../../services/coffee.service';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';

describe('CoffeeDetailsComponent', () => {
  let component: CoffeeDetailsComponent;
  let fixture: ComponentFixture<CoffeeDetailsComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeDetailsComponent ],
      providers: [CoffeeService],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();

    httpClient = TestBed.get(HttpClient);

    fixture = TestBed.createComponent(CoffeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
