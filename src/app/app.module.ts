import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

// App Modules
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

// services
import { PokeapiService } from './services/pokeapi.service';
import { CamelCasePipe } from './Shared/Pipes/camel-case.pipe';

// Pague 404
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PoketypeComponent } from './poketype/poketype.component';



@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
    CamelCasePipe,
    PageNotFoundComponent,
    PoketypeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
