import {computedFrom, inject, bindable} from 'aurelia-framework';
import {TaskQueue} from 'aurelia-task-queue';
import {DataContext} from 'services/datacontext';

@inject(TaskQueue, DataContext)
export class TypeAhead {
  @bindable searchText = '';
  @bindable selectedOption;
  @bindable options = [];
  @bindable debounceTime = 100;
  @bindable text = 'text';
  @bindable hasFocus = false;
  lastSearchValue = '';
  @bindable showResults = false;
  constructor(taskQueue, datacontext){
    this.taskQueue = taskQueue;
    this.datacontext = datacontext;
  }
  searchTextChanged(newValue){
    this.filterResults();
  }
  hasFocusChanged(newValue){
    var self = this;
    if (newValue){
      this.taskQueue.queueMicroTask(() => {
        self.showResults = newValue;
      });
    }
  }
  filterResults(){
    this.results = this.options.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
    });
  }
  optionsChanged(){
    this.filterResults();
  }
  selectItem(item){
    this.selectedOption = item;
    this.searchText = this.selectedOption[this.text];
    this.showResults = false;
  }
  clear(){
    this.selectedOption = null;
    this.searchText = '';
    this.showResults = true;
  }
  selectedOptionChanged(){
    console.log('changed')
  }
}
