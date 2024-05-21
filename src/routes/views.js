const viewController = require('../controllers/viewController');
const redesController = require('../controllers/redesController');

var routes = [];
var routesStudents = [];
var routesTeachers = [];
var routesAdmin = [];

routes.push(
    {
        'method': 'get',
        'path': '/',
        'function': viewController.dashboard,
        'role': 0
    },
);


// Rutas estudiantes
routesStudents.push(
    {
        'method': 'get',
        'path': '/estudiante/horario',
        'function': viewController.horario,
        'role': 1
    },
    {
        'method': 'get',
        'path': '/temperaturas',
        'function': redesController.getTemperaturas,
        'role': 4
    },
    {
        'method': 'post',
        'path': '/temperaturas',
        'function': redesController.sendTemperaturas,
        'role': 4
    },
);

// Rutas docentes
routesTeachers.push(
    {
        'method': 'get',
        'path': '/docentes/cargar_notas/:id_materia',
        'function': viewController.cargarEstudiantes,
        'role': 2
    },
);

routes = routes.concat(
    routesStudents,
    routesTeachers,
    routesAdmin,
);

module.exports = routes;    