const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, hasta = 10, listar = false,) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${colors.yellow('x')} ${i} ${colors.yellow('=')} ${base * i} \n`;
        }
        
        if (listar) {
            console.log('==============='.cyan);
            console.log(' Tabla del:', base);
            console.log('==============='.cyan);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}