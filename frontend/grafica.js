// fetch("http://localhost:8000/api/paises")
// .then((resp)=>resp.json())
// .then(resp=>console.log(resp));

var pais = [];
var total = [];

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
                datos_obtenidos.poblacion != undefined
            ) {
                total.push(datos_obtenidos.poblacion);
                pais.push(datos_obtenidos.nombre);
            }
        });
        
        // Variables para las gráficas
        var graf1 = {
            type: "pie",
            values: total,
            labels: pais,
            textinfo: "none",
            // automargin: true,
        };

        var datosGraficas = [graf1];

        // Estilos de la gráfica
        var layout = {
            title: "Estudiantes Por Programa",
            font: {
                family: "Times New Roman",
            },
        };

        Plotly.newPlot("myDiv", datosGraficas, layout);
    });