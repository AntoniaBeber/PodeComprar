
function getAnosApartir1950() {
    const anoLimite = 1950;
    let anoReferencia = new Date().getFullYear();

    const anos = [];

    do {
        anos.push(anoReferencia);
        anoReferencia--;
    } while (anoReferencia >= anoLimite)
    return anos;
}

console.log(getAnosApartir1950());