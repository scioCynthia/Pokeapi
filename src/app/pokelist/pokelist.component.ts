import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
    selector: 'app-pokelist',
    templateUrl: './pokelist.component.html',
    styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

    pokemons: Pokemon[] = [];
    pokemonsList: Pokemon[] = [];
    pokemonVariable: string = 'Pikachu';

    constructor(private pokeApi: PokeapiService) { }

    ngOnInit(): void {
        this.pokeApi.GetPokemonList().subscribe((pokemonsResult: any) => {
            this.pokemons = pokemonsResult;
            this.pokemonsList = pokemonsResult;
        });
    }

    filterPokemons(pokemonString: string): void {
        this.pokemonsList = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonString.toLowerCase()));
    }


}
