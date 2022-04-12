import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'poke-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
    name = 'bulbasaur';
    constructor() { }

    ngOnInit(): void {
        
    }
}
