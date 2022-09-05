import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coffeeReducer } from './state/coffee/coffee.reducers';
import { CoffeeEffects } from './state/coffee/coffee.effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CoffeeDetailsComponent,
    CoffeeListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      coffee: coffeeReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CoffeeEffects]),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
