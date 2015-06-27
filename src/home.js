import {inject, bindable} from 'aurelia-framework';
import {Collections} from 'services/collections';
import {DataContext} from 'services/datacontext';

@inject(Collections, DataContext)
export class Home{
  heading = 'Choose a planet...';
  @bindable selectedPlanet;
  constructor(collections, datacontext){
    this.collections = collections;
    this.datacontext = datacontext;
  }
  activate(){
    this.selectedPlanet = this.collections.planets[0];
  }
  selectedPlanetChanged(){
    if (this.selectedPlanet) {
      this.selectedPlanet.residents.forEach(resident => {
        this.datacontext.getResource(resident).then(resp => {
          this.selectedPlanet.fetchedResidents.push(resp.content);
        });
      });
    }
  }
}
