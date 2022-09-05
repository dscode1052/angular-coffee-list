import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CoffeeService } from '../../services/coffee.service';
import { StoreModule } from '@ngrx/store';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();

    httpClient = TestBed.get(HttpClient);

    fixture = TestBed.createComponent(CoffeeListComponent);
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
