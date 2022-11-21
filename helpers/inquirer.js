import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            'Crear tarea', 
            'Listar tareas', 
            'Listar tareas completadas',
            'Listar tareas pendientes',
            'Completar tarea(s)',
            'Eliminar tarea',
            'Salir'
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción  '.green);
    console.log('=========================\n'.green);

    const opt = await inquirer.prompt(questions);

    return opt
}

export { inquirerMenu };