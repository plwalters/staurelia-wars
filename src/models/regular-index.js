export class Person {
  url = '';
  name = '';
  birth_year = '';
  eye_color = '';
  gender = '';
  hair_color = '';
  height = '';
  mass = '';
  name = '';
  skin_color = '';
  created = '';
  edited = '';
  vehicles = [];
  species = [];
  starships = [];
  homeworld = [];
  films = [];
  constructor(data){
    Object.assign(this, data);
    this.onMap = false;
    this.hasMet = false;
  }
  showOnMap(map){
    let slot = map.getEmptyCharacterSlot();
    console.log(slot);
    if (slot) {
      this.onMap = true;
      slot.setCharacter(this);
    }
  }
}

export class Film {
  url = '';
  title = '';
  episode_id = '';
  opening_crawl = '';
  director = '';
  producer = '';
  release_date = '';
  created = '';
  edited = '';
  species = [];
  starships = [];
  vehicles = [];
  characters = [];
  planets = [];
  constructor(data){
    Object.assign(this, data);
  }
}

export class StarShip {
  MGLT: '';
  cargo_capacity: '';
  consumables: '';
  cost_in_credits: '';
  created: '';
  crew: '';
  edited: '';
  hyperdrive_rating: '';
  length: '';
  manufacturer: '';
  max_atmosphering_speed: '';
  model: '';
  name: '';
  passengers: '';
  films: [];
  pilots: [];
  starship_class: '';
  url: '';
  constructor(data){
    Object.assign(this, data);
  }
}

export class Vehicle {
  cargo_capacity: '';
  consumables: '';
  cost_in_credits: '';
  created: '';
  crew: '';
  edited: '';
  length: '';
  manufacturer: '';
  max_atmosphering_speed: '';
  model: '';
  name: '';
  passengers: '';
  pilots: [];
  films: [];
  url: '';
  vehicle_class: '';
  constructor(data){
    Object.assign(this, data);
  }
}

export class Species {
  average_height: '';
  average_lifespan: '';
  classification: '';
  created: '';
  designation: '';
  edited: '';
  eye_colors: '';
  hair_colors: '';
  homeworld: '';
  language: '';
  name: '';
  people: [];
  films: [];
  skin_colors: '';
  url: '';
  constructor(data){
    Object.assign(this, data);
  }
}

export class Planet {
  climate: '';
  created: '';
  diameter: '';
  edited: '';
  films: [];
  gravity: '';
  name: '';
  orbital_period: '';
  population: '';
  residents: [];
  rotation_period: '';
  surface_water: '';
  terrain: '';
  url: '';
  constructor(data){
    Object.assign(this, data);
    this.fetchedResidents = [];
    this.surface = new Surface(this.url);
  }
}

let blockTypes = [];
blockTypes['!'] = { value: 'stop', movable: false};
blockTypes['O'] = { value: 'plus-square-o', movable: false };
blockTypes['D'] = { value: 'file', movable: true };
blockTypes['S'] = { value: 'eject', movable: true };
blockTypes['_'] = { value: 'stop white', movable: true };
blockTypes['C'] = { value: 'user-secret', movable: false };
blockTypes['R'] = { value: 'stop white', movable: false };

export class Surface {
  blocks = [];
  planet_id = '';
  constructor(planet_url){
    this.planet_id = planet_url;
    this.blocks = getBlocks();
  }
  findStart(){
    return this.blocks.filter(block => {
      return block.typeKey === 'S';
    })[0];
  }
  getEmptyCharacterSlot(){
    return this.blocks.filter(block => {
      return block.typeKey === 'R' && block.state !== 'occupied';
    })[0];
  }
}

export class Block {
  row = 0;
  column = 0;
  typeKey = '';
  typeSymbol = '';
  display = '';
  movable = false;
  state = 'closed';
  constructor(col, row, key, sym, mov){
    this.row = row;
    this.column = col;
    this.typeKey = key;
    this.typeSymbol = sym;
    this.display = sym;
    this.movable = mov;
    this.character = null;
  }
  clear(){
    this.display = this.typeSymbol;
  }
  showChar(){
    this.display = blockTypes['C'].value;
  }
  canBeMovedTo(){
    if (this.typeKey === 'D' && this.state === 'closed') {
      this.typeSymbol = 'file-o';
      this.state = 'open';
    } else if (this.typeKey === 'R' && this.state === 'occupied') {
      this.character.hasMet = true;
    }
    return this.movable;
  }
  setCharacter(char){
    this.character = char;
    this.typeSymbol = 'user';
    this.display = 'user';
    this.state = 'occupied';
  }
}

let this_surface = '' +
  '!!!!!!!!!!!!!!!!!!!!;' +
  '!OOOOOO   OOOOOOOO !;' +
  '!O    O   O      O !;' +
  '!O  R O   O  R   O !;' +
  '!O    O   O      O !;' +
  '!OODOOO   OOOODOOO !;' +
  '!         O      O !;' +
  '!         O      O !;' +
  '!         OOOODOOO !;' +
  '!                  !;' +
  '!       S          !;' +
  '!                  !;' +
  '!                  !;' +
  '!OOOOOO   OOOOOOOO !;' +
  '!O    O   O      O !;' +
  '!O R  D   D  R   O !;' +
  '!O    O   O      O !;' +
  '!OOOOOO   OOOOOOOO !;' +
  '!                  !;' +
  '!!!!!!!!!!!!!!!!!!!!;'

function getBlocks(){
  let these_blocks = this_surface.split('');
  let row = 1;
  let col = 1;
  let allBlocks = [];
  these_blocks.forEach(block => {
    if (block === ';') {
      col = 1;
      row += 1;
    } else {
      col += 1;
      if (block === ' '){
        block = '_';
      }
      let thisBlock =  new Block(col, row, block, blockTypes[block].value, blockTypes[block].movable);
      allBlocks.push(thisBlock);
    }
  });
  return allBlocks;
}
