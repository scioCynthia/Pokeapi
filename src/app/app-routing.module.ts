import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PoketypeComponent } from './poketype/poketype.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: 'Pokemon/:id', component: PokemonDetailsComponent},
    {path: 'page-not-found', component: PageNotFoundComponent },
    {path: 'poketype', component: PoketypeComponent },
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },
    { path: '**', redirectTo: 'not', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
