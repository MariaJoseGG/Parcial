var pais = [];
var total = [];
var capit = [];
var idi = [];
var cont = 0;

// Consumo de la API
fetch("http://localhost:8000/api/paises")
    // Then necesita una promesa, y esa promesa se resuelve con una respuesta
    .then((datos_obtenidos) => datos_obtenidos.json())

    //datos_obtenidos es el resultado de la promesa respuesta, la cual fue convertida a json
    .then(function transformar(datos_obtenidos) {
        // Iteramos sobre cada dato
        datos_obtenidos.forEach(function agregar(datos_obtenidos) {
            //Si los datos son diferentes de vacío
            if (
                datos_obtenidos.nombre != undefined &&
                datos_obtenidos.capital != undefined &&
                datos_obtenidos.idioma != undefined &&
                datos_obtenidos.poblacion != undefined
            ) {
                total.push(datos_obtenidos.poblacion);
                pais.push(datos_obtenidos.nombre);
                capit.push(datos_obtenidos.capital);
                idi.push(datos_obtenidos.idioma);
                cont = cont + 1;
            }
        });
        let text = ''
        for (var i = 0; i < cont; i++) {
            text = text+
        `
            <tr>
                <td>`+pais[i]+`</td>
                <td>`+capit[i]+`</td>
                <td>`+idi[i]+`</td>
                <td>`+total[i]+`</td>
            </tr>
        `
        }
        document.getElementById("cuerpo").innerHTML = text;


    });

// document.getElementById("tablita").innerHTML=`Hola número`+2+`Co`;