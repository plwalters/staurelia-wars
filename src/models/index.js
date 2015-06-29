export {Character} from 'models/character';
export {Person} from 'models/regular-index';

// import breeze from 'breeze';

// export class Index {
//   constructor() {
//     var DT = breeze.DataType;

//     this.initialize = function (metadataStore) {
//       // Character information
//       metadataStore.addEntityType({
//         shortName: "Character",
//         dataProperties: {
//           url: { dataType: "String", isPartOfKey: true },
//           name: { dataType: 'String' },
//           birth_year: { dataType: 'String' },
//           eye_color: { dataType: 'String' },
//           gender: { dataType: 'String' },
//           hair_color: { dataType: 'String' },
//           height: { dataType: 'String' },
//           mass: { dataType: 'String' },
//           name: { dataType: 'String' },
//           skin_color: { dataType: 'String' },
//           created: { dataType: 'DateTime' },
//           edited: { dataType: 'DateTime' }
//         },
//         navigationProperties: {
//           vehicles:{
//             entityTypeName: "Vehicle", isScalar: false,
//             associationName: "Character_Vehicles"
//           },
//           species:{
//             entityTypeName: "Species", isScalar: false,
//             associationName: "Character_Species"
//           },
//           starships:{
//             entityTypeName: "Starship", isScalar: false,
//             associationName: "Character_Starships"
//           },
//           homeworld:{
//             entityTypeName: "Homeworld", isScalar: false,
//             associationName: "Character_Homeworld"
//           },
//           films:{
//             entityTypeName: "Film", isScalar: false,
//             associationName: "Character_Films"
//           }
//         }
//       });

//       // Film
//       metadataStore.addEntityType({
//         shortName: "Film",
//         dataProperties: {
//           url: { dataType: "String", isPartOfKey: true },
//           title: { dataType: "String" },
//           episode_id: { dataType: "Integer" },
//           opening_crawl: { dataType: "String" },
//           director: { dataType: "String" },
//           producer: { dataType: "String" },
//           release_date: { dataType: "DateTime" },
//           created: { dataType: "DateTime" },
//           edited: { dataType: "DateTime" }
//         },
//         navigationProperties: {
//           species: {
//             entityTypeName: "Film_Species", isScalar: true,
//             associationName: "Form_Routes", foreignKeyNames: ['form_template_id']
//           },
//           starships: {
//             entityTypeName: "Film_Starships", isScalar: true,
//             associationName: "Form_Routes", foreignKeyNames: ['form_template_id']
//           },
//           vehicles: {
//             entityTypeName: "Film_Vehicles", isScalar: true,
//             associationName: "Form_Routes", foreignKeyNames: ['form_template_id']
//           },
//           characters: {
//             entityTypeName: "Film_Characters", isScalar: true,
//             associationName: "Form_Routes", foreignKeyNames: ['form_template_id']
//           },
//           planets: {
//             entityTypeName: "Film_Planets", isScalar: true,
//             associationName: "Form_Routes", foreignKeyNames: ['form_template_id']
//           }
//         }
//       });

//       // metadataStore.registerEntityTypeCtor(
//       //   'FormTemplate', null, formTemplateInitializer);

//       // function formTemplateInitializer(template) {
//       //   template.open = false;
//       // }
//     }
//   }
// }
