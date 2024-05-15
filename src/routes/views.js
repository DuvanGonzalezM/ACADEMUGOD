const viewController = require('../controllers/viewController');

var routes = [];
var routesStudents = [];
var routesTeachers = [];
var routesAdmin = [];

routes.push(
    {
        'method': 'get',
        'path': '/',
        'function': viewController.dashboard
    },
);

// Rutas estudiantes
routesStudents.push(
    {
        'method': 'get',
        'path': '/estudiante/horario',
        'function': viewController.horario
    },
);

routes = routes.concat(
    routesStudents,
    routesTeachers,
    routesAdmin,
);

module.exports = routes;