import {inject, bindable} from 'aurelia-framework';
import {Collections} from 'services/collections';
import {DataContext} from 'services/datacontext';
import {Character, Person} from 'models/index';

@inject(Collections, DataContext)
export class Home{
  heading = 'Choose a planet...';
  @bindable selectedPlanet;
  character;
  mapRows = [];
  constructor(collections, datacontext){
    this.collections = collections;
    this.datacontext = datacontext;
    this.character = new Character();
  }
  selectedPlanetChanged(){
    if (this.selectedPlanet) {
      this.selectedPlanet.residents.forEach(resident => {
        this.datacontext.getResource(resident).then(resp => {
          let newResident = new Person(resp.content)
          this.selectedPlanet.fetchedResidents.push(newResident);
          this.recalculateMap();
        });
      });
    }
  }
  recalculateMap(){
    if (this.selectedPlanet) {
      let surface = this.selectedPlanet.surface;
      let residents = this.selectedPlanet.fetchedResidents;
      let allRows = [];
      let returnRows = [];
      surface.blocks.forEach(block => {
        if (allRows.indexOf(block.row) === -1) {
          allRows.push(block.row)
        }
      });
      allRows.forEach(row => {
        let newRow = surface.blocks.filter(block => {
          return block.row === row;
        });
        returnRows.push(newRow);
      });
      this.mapRows = returnRows;
      let startingPosition = surface.findStart();
      this.character.moveToTile(startingPosition);
      let newSpot = this.getTile(this.character.x, this.character.y);
      newSpot.showChar();
      residents.forEach(resident => {
        console.log(resident);
        if (!resident.onMap) {
          resident.showOnMap(this.selectedPlanet.surface);
        }
      });
    }
  }
  getTile(x,y){
    return this.selectedPlanet.surface.blocks.filter(block => {
      return block.row === x && block.column === y;
    })[0];
  }
  move(dir){
    let char = this.character;
    let oldSpot = this.getTile(char.x, char.y);
    oldSpot.clear();
    char.move(dir);
    let newSpot = this.getTile(char.x, char.y);
    if (!newSpot.canBeMovedTo()) { newSpot = oldSpot; char.moveToTile(oldSpot); }
    newSpot.showChar();
  }
}
