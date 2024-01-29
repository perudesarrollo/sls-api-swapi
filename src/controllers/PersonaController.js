const { v5: uuidv5 } = require("uuid");
const Swapi = require("./../libs/swapi");
const DynamoDb = require("./../libs/dynamodb");
const Constants = require("./../constants/app.constants");
const PersonaValidator = require("./PersonaValidator");
const PersonalService = require("./PersonalService");

class PersonaController {
  static listarPersonas = async (event, context, callback) => {
    try {
      let bodyJson = event.queryStringParameters;
      const personas = await DynamoDb.getAll(
        Constants.Lambda.PEOPLE_TABLE,
        bodyJson
      );
      callback(null, PersonalService.toResponse(null, "success", personas));
    } catch (error) {
      callback(null, PersonalService.toResponse(400, "errors", error));
    }
  };

  static crearPersona = async (event, context, callback) => {
    try {
      const { error, value } = PersonaValidator.Id(event, callback);

      if (error) {
        const message = error.details.map((v) => v.message).join(",");
        callback(
          null,
          PersonalService.toResponse(422, "errors", { error: message })
        );
      }

      const { id } = value;
      const uuid = uuidv5(id, Constants.Lambda.NAMESPACE_ID);
      const existePersona = await PersonalService.getPersonaId(uuid);
      console.log("existePersona::", existePersona);
      if (existePersona !== undefined) {
        callback(
          null,
          PersonalService.toResponse(
            400,
            `Ya se encuentra registrado ${existePersona.nombre}, intente con otro id.`,
            existePersona
          )
        );
      }

      const payload = await Swapi.getResource(Constants.Swapi.PEOPLE_PATH, id);

      const translatedPerson = await PersonalService.translatePersonAttributes(
        payload,
        uuid
      );
      await PersonalService.setPerson(translatedPerson);

      callback(
        null,
        PersonalService.toResponse(201, "success", translatedPerson)
      );
    } catch (error) {
      console.log("error crear::", error);
      callback(null, PersonalService.toResponse(400, "errors", error));
    }
  };
}

module.exports = PersonaController;
