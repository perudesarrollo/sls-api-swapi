const PersonaModel = require("./PersonaModel");
const DynamoDb = require("./../libs/dynamodb");
const Constants = require("./../constants/app.constants");

class PersonalService {
  static toResponse = (code, status, payload) => {
    const response = {
      statusCode: code || 200,
      body: JSON.stringify(
        {
          status,
          payload,
        },
        null,
        2
      ),
    };

    return response;
  };

  static getPersonaId = async (id) => {
    return await DynamoDb.getItem(id, Constants.Lambda.PEOPLE_TABLE);
  };

  static buscarPersona = async (nombre) => {
    return await DynamoDb.getItemName(nombre, Constants.Lambda.PEOPLE_TABLE);
  };

  static setPerson = async (data) => {
    return await DynamoDb.setItem(data, Constants.Lambda.PEOPLE_TABLE);
  };

  static translatePersonAttributes = async (data, id) => {
    const result = [];
    result.push(data);

    return result.map((p) => {
      return new PersonaModel({
        id: id,
        nombre: p.name,
        altura: p.height,
        peso: p.mass,
        color_cabello: p.hair_color,
        color_piel: p.skin_color,
        color_ojos: p.eye_color,
        anio_nacimiento: p.birth_year,
        genero: p.gender,
        planeta_natal: p.homeworld,
        peliculas: p.films,
        especies: p.species,
        vehiculos: p.vehicles,
        naves_estelares: p.starships,
        creado: p.created,
        modificado: p.edited,
        url: p.url,
      });
    })[0];
  };
}

module.exports = PersonalService;
