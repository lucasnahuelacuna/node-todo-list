import colors from 'colors';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';
import Tareas from './models/Tareas.js';


console.clear();

const main = async () => {
    let opt = '';

    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        
        switch(opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        }

        if(opt !== '0')
            await pausa();

    } while (opt !== '0');
}

main();