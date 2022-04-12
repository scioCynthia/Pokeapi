import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-poketype',
  templateUrl: './poketype.component.html',
  styleUrls: ['./poketype.component.css']
})
export class PoketypeComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemonsType: Pokemon[] = [];
  pokemonVariableT: string = 'Grass';

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(): void {
    this.pokeApi.GetPokemonList().subscribe((pokemonsResult: any) => {
      this.pokemons = pokemonsResult;
      this.pokemonsType = pokemonsResult;
  });
}

filterTypePokemons(pokemonString: string): void {
  this.pokemonsType = this.pokemons.filter(pokemon => pokemon.type.toLowerCase().includes(pokemonString.toLowerCase()));
}


}
