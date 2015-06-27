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
  }
}
