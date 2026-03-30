import * as countryCurrencyMap from 'country-currency-map';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


function obtenerMoneda(codigoPais) {
    try {
        const codigo = codigoPais.toUpperCase();

        const moneda = countryCurrencyMap[codigo];

        return moneda ? moneda : null;

    } catch (error) {
        return null;
    }
}