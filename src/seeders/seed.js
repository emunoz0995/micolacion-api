const Roles = require('../models/roles.model');
const Users = require('../models/users.models');
const Schools = require('../models/schools.model')
const Services = require('../models/services.model')
const Section = require('../models/sections.model');

const db = require("../utils/database");

const roles = [
    { id: 1, name: 'Administrador'},
    { id: 2, name: 'Usuario_LCV'},
    { id: 3, name: 'Usuario_Cervantes'}
];

const users = [
    {
        firstName: 'Edison',
        lastName: 'Muñoz',
        email: 'edisona@prueba.com',
        password: 'lahabana1.2',
        roleId: 1,
    },
    {
        firstName: 'Augusto',
        lastName: 'Pesantez',
        email: 'augusto@prueba.com',
        password: 'PeefEfren2628',
        roleId: 1,
    },
    {
        firstName: 'Peef',
        lastName: 'Coorp',
        email: 'peef@prueba.com',
        password: 'jintriago2022',
        roleId: 1,
    }
    ,
    {
        firstName: 'Maria Dolores',
        lastName: 'Valdivieso',
        email: 'mdvaldivieso@prueba.com',
        password: 'mdvaldivieso2022',
        roleId: 1,
    },
    {
        firstName: 'Rocio',
        lastName: 'Perez',
        email: 'rocio@prueba.com',
        password: 'rperez2022',
        roleId: 1,
    },
    {
        firstName: 'Karina',
        lastName: 'Valdivieso',
        email: 'karina@prueba.com',
        password: 'kvaldivieso2022',
        roleId: 1,
    },
    {
        firstName: 'Betty',
        lastName: 'Guatemal',
        email: 'betty@prueba.com',
        password: 'bguatemal2022',
        roleId: 3,
    },
    {
        firstName: 'Verónica ',
        lastName: 'Puma',
        email: 'veronica@prueba.com',
        password: 'vquezada2023',
        roleId: 1,
    }
];

const schools = [
    { id:1, name: 'Liceo Campoverde', active: true },
    { id:2, name: 'Cervantes', active: true },

];

const seccions = [
    { id:1 ,name: 'Campito', isLcv: true},
    { id:2 ,name: 'Basica Elemental',isLcv: true},
    { id:3 ,name: 'Basica Media',isLcv: true},
    { id:4 ,name: 'Basica Superior/BGU',isLcv: true},
    { id:5 ,name: 'Inicial',isCervantes: true},
    { id:6 ,name: 'Primaria',isCervantes: true},
    { id:7 ,name: 'Secundaria',isCervantes: true},
    { id:8 ,name: 'Personal',isLcv: true ,isCervantes: true},

];

const servicios = [
    {
        id:1,
        code: "MC-29",
        name: "ACIDIX",
        price: 0.446
    },
    {
        id:2,
        code: "MC-017",
        name: "ALMUERZO DIARIO",
        price: 3.5
    },
    {
        id:3,
        code: "MC-012",
        name: "ALMUERZO PERSONAL CAMPOVERDE",
        price: 2.65
    },
    {
        id:4,
        code: "MC-010",
        name: "ALMUERZOS CLUB CAMPITO",
        price: 35.7142
    },
    {
        id:5,
        code: "MC-016",
        name: "ALMUERZOS PERSONAL ADMINISTRATIVO CERVANTES",
        price: 3.5
    },
    {
        id:6,
        code: "SERV-202",
        name: "ASESORIA",
        price: 0
    },
    {
        id:7,
        code: "MC-21",
        name: "BEBIDAS",
        price: 0.75
    },
    {
        id:8,
        code: "B001",
        name: "BEBIDAS CERVANTES",
        price: 0.67
    },
    {
        id:9,
        code: "MC-31",
        name: "CASERO",
        price: 0.89
    },
    {
        id:10,
        code: "MC-22",
        name: "COFFE BREAK ",
        price: 2.5
    },
    {
        id:11,
        code: "COM-201",
        name: "COMPRAS 0",
        price: 0
    },
    {
        id:12,
        code: "COM-200",
        name: "COMPRAS 12",
        price: 0
    },
    {
        id:13,
        code: "MC-25",
        name: "CORNETO",
        price: 1.115
    },
    {
        id:14,
        code: "EXENTO DE IVA",
        name: "EXENTO DE IVA",
        price: 0
    },
    {
        id:15,
        code: "MC-30",
        name: "GEMELO",
        price: 0.67
    },
    {
        id:16,
        code: "MC-20",
        name: "JUGO JARRA 3 LTS.",
        price: 5
    },
    {
        id:17,
        code: "MC-28",
        name: "MAGNUM",
        price: 1.34
    },
    {
        id:18,
        code: "MC-32",
        name: "MINIYOG",
        price: 0.22
    },
    {
        id:19,
        code: "COM-203",
        name: "NO OBJETO DE IVA",
        price: 0
    },
    {
        id:20,
        code: "MC-26",
        name: "POLITO",
        price: 0.224
    },
    {
        id:21,
        code: "REE-201",
        name: "REEMBOLSO DE GASTOS",
        price: 0
    },
    {
        id:22,
        code: "MC-18",
        name: "REFRIGERIO DIARIO",
        price: 3
    },
    {
        id:23,
        code: "MC-013",
        name: "REFRIGERIO PERSONAL CAMPOVERDE",
        price: 1.7
    },
    {
        id:24,
        code: "MC-011",
        name: "REFRIGERIOS PERSONAL ADMINISTRATIVO CERVANTES",
        price: 2.5
    },
    {
        id:25,
        code: "MC24",
        name: "REFRIGERIOS PERSONAL CERVANTES",
        price: 2.5
    },
    {
        id:26,
        code: "MC-27",
        name: "SANDUCHE H",
        price: 0.9
    },
    {
        id:27,
        code: "MC-23",
        name: "SERVICIO ALIMENTACION",
        price: 0
    },
    {
        id:28,
        code: "MC-19",
        name: "SERVICIO REFRIGERIOS",
        price: 70
    },
    {
        id:29,
        code: "TAR001",
        name: "TARJETA ALMUERZO PRIMARIA",
        price: 67
    },
    {
        id:30,
        code: "MC-009",
        name: "TARJETA ALMUERZOS CERVANTES",
        price: 80
    },
    {
        id:31,
        code: "MC-005",
        name: "TARJETA ALMUERZOS PREESCOLAR CERVANTES",
        price: 60
    },
    {
        id:32,
        code: "MC-004",
        name: "TARJETA ALMUERZOS PRIMARIA",
        price: 67
    },
    {
        id:33,
        code: "MC-0020",
        name: "TARJETA ALMUERZOS SECUNDARIA",
        price: 70
    },
    {
        id:34,
        code: "MC-006",
        name: "TARJETA COMBO PREESCOLAR CERVANTES",
        price: 80
    },
    {
        id:35,
        code: "MC-001",
        name: "TARJETA COMBO PRIMARIA ",
        price: 98
    },
    {
        id:36,
        code: "MC-002",
        name: "TARJETA COMBO SECUNDARIA",
        price: 108
    },
    {
        id:37,
        code: "MC-003",
        name: "TARJETA REFRIGERIOS",
        price: 55
    },
    {
        id:38,
        code: "MC-008",
        name: "TARJETA REFRIGERIOS CERVANTES",
        price: 70
    },
    {
        id:39,
        code: "MC-007",
        name: "TARJETA REFRIGERIOS PREESCOLAR CERVANTES",
        price: 40
    },
    {
        id:40,
        code: "SRV-301",
        name: "VENTAS 12",
        price: 0
    },
    {
        id:41,
        code: "SNS-001",
        name: "SIN SERVICIO",
        price: 0
    }
];


db.sync({ force: false })

    .then(() => {

        console.log('Iniciando con el sembrario malicioso');

        roles.forEach((rol) => Roles.create(rol));

        setTimeout(() => {
            users.forEach((user) => Users.create(user));
        }, 1000);

        setTimeout(() => {
            schools.forEach((school) => Schools.create(school));
        }, 3000);

        setTimeout(() => {
            seccions.forEach((seccion) => Section.create(seccion));
        }, 4000);

        setTimeout(() => {
            servicios.forEach((servicio) => Services.create(servicio));
        }, 6000);

    })
    .catch((error) => console.log(error))