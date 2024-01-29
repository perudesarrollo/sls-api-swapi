### Iniciar Serverless

```ssh
npm i
sls deploy
```

### Crear

```sh
curl --location 'https://kta94gom2c.execute-api.us-east-1.amazonaws.com/swapi/personas' \
--header 'Content-Type: application/json' \
--data '{
    "id": "1"
}'
```

```json
{
  "status": "success",
  "payload": {
    "id": "f49aa4ff-ac5c-534d-a334-b753966c0c0e",
    "nombre": "Luke Skywalker",
    "altura": "172",
    "peso": "77",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojos": "blue",
    "anio_nacimiento": "19BBY",
    "genero": "male",
    "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
    "peliculas": [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/2/",
      "https://swapi.py4e.com/api/films/3/",
      "https://swapi.py4e.com/api/films/6/",
      "https://swapi.py4e.com/api/films/7/"
    ],
    "especies": ["https://swapi.py4e.com/api/species/1/"],
    "vehiculos": [
      "https://swapi.py4e.com/api/vehicles/14/",
      "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "naves_estelares": [
      "https://swapi.py4e.com/api/starships/12/",
      "https://swapi.py4e.com/api/starships/22/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "modificado": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.py4e.com/api/people/1/"
  }
}
```

### Get

```sh
curl --location 'https://kta94gom2c.execute-api.us-east-1.amazonaws.com/swapi/personas' \
--header 'content-type: application/json'
```

Respuesta

```json
{
  "status": "success",
  "payload": [
    {
      "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
      "nombre": "C-3PO",
      "color_cabello": "n/a",
      "vehiculos": [],
      "altura": "167",
      "modificado": "2014-12-20T21:17:50.309000Z",
      "url": "https://swapi.py4e.com/api/people/2/",
      "peso": "75",
      "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/4/",
        "https://swapi.py4e.com/api/films/5/",
        "https://swapi.py4e.com/api/films/6/"
      ],
      "naves_estelares": [],
      "color_piel": "gold",
      "especies": ["https://swapi.py4e.com/api/species/2/"],
      "creado": "2014-12-10T15:10:51.357000Z",
      "id": "88fcb92e-c9b0-5598-85f1-f1b92d109d6e",
      "color_ojos": "yellow",
      "anio_nacimiento": "112BBY",
      "genero": "n/a"
    },
    {
      "planeta_natal": null,
      "nombre": null,
      "color_cabello": null,
      "vehiculos": [],
      "altura": null,
      "modificado": null,
      "url": null,
      "peso": null,
      "peliculas": [],
      "naves_estelares": [],
      "color_piel": null,
      "especies": [],
      "creado": null,
      "id": "80284680-3304-5869-9788-7428e6c6ee86",
      "color_ojos": null,
      "anio_nacimiento": null,
      "genero": null
    },
    {
      "planeta_natal": "https://swapi.py4e.com/api/planets/1/",
      "nombre": "Luke Skywalker",
      "color_cabello": "blond",
      "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
      ],
      "altura": "172",
      "modificado": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.py4e.com/api/people/1/",
      "peso": "77",
      "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
      ],
      "naves_estelares": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
      ],
      "color_piel": "fair",
      "especies": ["https://swapi.py4e.com/api/species/1/"],
      "creado": "2014-12-09T13:50:51.644000Z",
      "id": "f49aa4ff-ac5c-534d-a334-b753966c0c0e",
      "color_ojos": "blue",
      "anio_nacimiento": "19BBY",
      "genero": "male"
    }
  ]
}
```
