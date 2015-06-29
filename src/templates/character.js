import {inject, bindable} from 'aurelia-framework';
import {DataContext} from 'services/datacontext';

@inject(DataContext)
export class Character {
  @bindable char;
  open = false;
  constructor(datacontext){
    this.datacontext = datacontext;
  }
  toggleOpen(){
    this.open = !this.open;
  }
}
