import { URL } from 'url';

let miUrl = null;
let miObjeto = null;

miUrl = 'https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2343772/tp02-ejercitacion-de-node';


miObjeto = parsearUrl(miUrl);

console.log(miObjeto);

function parsearUrl(laURL) {

    try {

        const urlObj = new URL(laURL);

        return {
            host: urlObj.origin,
            pathname: urlObj.pathname,
            parametros: urlObj.searchParams
        };

    } catch (error) {

        console.error("Error al parsear la URL:", error.message);

        return {
            host: null,
            pathname: null,
            parametros: null
        };

    }

}