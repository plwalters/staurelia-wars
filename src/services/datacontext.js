import * as Models from 'models/regular-index';
import {Collections} from 'services/collections';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient, Collections)
export class DataContext {
  baseUrl = "http://swapi.co/api/";
  constructor(httpClient, collections){
    this.httpClient = httpClient;
    this.collections = collections;
  }
  primeData(){
    var promise = Promise.all([
      this.getList('films', this.collections.films, Models.Film),
      this.getList('people', this.collections.people, Models.Person),
      this.getList('planets', this.collections.planets, Models.Planet),
      this.getList('species', this.collections.species, Models.Species),
      this.getList('starships', this.collections.starships, Models.StarShip),
      this.getList('vehicles', this.collections.vehicles, Models.Vehicle)
    ]);
    return promise;
  }
  getAllPlanets(){
    var url = this.baseUrl + 'planets/';
    return this.getResource(url).then(resp => {
      var results = resp.content.results;
      var planets = [];
      results.forEach(result => {
        var new_item = new Models.Planet(result);
        planets.push(new_item);
      });
      this.collections.planets = this.collections.planets.concat(planets);
      this.checkForNext(resp);
    });
  }
  getResource(url){
    return this.httpClient.get(url);
  }
  checkForNext(response){
    if (response.content && response.content.next) {
      this.getResource(response.content.next).then(resp => {
        var results = resp.content.results;
        var planets = [];
        results.forEach(result => {
          var new_item = new Models.Planet(result);
          planets.push(new_item);
        });
        this.collections.planets = this.collections.planets.concat(planets);
        this.checkForNext(resp);
      });
    }
  }
  getList(resource, collection, type){
    return this.httpClient.get(this.baseUrl + resource).then(resp => {
      resp.content.results.forEach(result => {
        var new_item = new type(result);
        collection.push(new_item);
      });
    });
  }
}
