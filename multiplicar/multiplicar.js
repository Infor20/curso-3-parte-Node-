const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log('======Tabla de multiplicar========='.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        let r = i * base;
        console.log((`${base} * ${i} = ${r}  \n`));
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let r = i * base;
            data += (`${base} * ${i} = ${r}  \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}