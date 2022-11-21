import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
import Tarea from './models/tarea.js';
import Tareas from './models/Tareas.js';


console.clear();

const main = async () => {
    let opt = '';

    do {
        //opt = await inquirerMenu();
        //console.log({ opt });

        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;

        if(opt !== '0')
            await pausa();

    } while (opt !== '0');
}

main();