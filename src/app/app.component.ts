import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Interface } from 'readline';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface City {
  name: string;
  region: Region;
}

export interface Region {
  name: string;
  postalcode: string;
  adress: Array<Adress>;
}

// export interface MyInterface extends Array<Adress> { }

export interface Adress {
  streetname: string;
  housenumber: number;
}
/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<City[]>;


  states: City[] = [
    {
      name: 'MD-2536',
      region : {
        name: "aaaa",
        postalcode: "MD-3654",
        adress: [{
          streetname: "Alba Iulia",
          housenumber: 35
        }]
      }
    },
    {
      name: 'MD-2537',
      region : {
        name: "aaaa",
        postalcode: "MD-3654",
        adress: [{
          streetname: "Alba Iulia",
          housenumber: 35
        }]
      }
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */