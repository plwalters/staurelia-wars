import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {inject} from 'aurelia-framework';
import {DataContext} from 'services/datacontext';

@inject(DataContext)
export class App {
  constructor(datacontext){
    this.datacontext = datacontext;
  }
  activate(){
    return this.datacontext.getAllPlanets();
  }
  configureRouter(config, router){
    config.title = 'Staurelia Wars';
    config.map([
      { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' }
    ]);
    this.router = router;
  }
}
