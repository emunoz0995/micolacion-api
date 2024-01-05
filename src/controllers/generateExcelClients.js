const path = require('path');
const xl = require("excel4node");
const Utils = require("../utils/Utils");
const ClientService = require("../services/clients.services");

const generateExcelClients = async (req, res) => {
    try {
        var today = new Date();
        var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const fechaFormateada = (date) =>{
            const formattedDate = date.toLocaleDateString('es-ES', options);
            return formattedDate;
        } 
        var wb = new xl.Workbook({
            dateFormat: "dd/mm/yyyy hh:mm:ss",
        });
        var ws = wb.addWorksheet("Clientes");

        //RESPONSE PASSENGER FROM INGALA

        const school_id = Utils.decode(req.params.school_id);
        const result = await ClientService.getAll(school_id);

        //COLUMNS
        ws.column(1).setWidth(40);
        ws.column(2).setWidth(25);
        ws.column(3).setWidth(25);
        ws.column(4).setWidth(40);
        ws.column(5).setWidth(50);
        ws.column(6).setWidth(70);
        ws.column(7).setWidth(15);

        //ADD IMAGE
        // ws.addImage({
        //     path: path.join(__dirname, "./icons/colacion.png"),
        //     type: "picture",
        //     position: {
        //         type: 'twoCellAnchor',
        //         from: {
        //           col: 1, // Columna de inicio
        //           colOff: 0, // Desplazamiento horizontal en celdas
        //           row: 1, // Fila de inicio
        //           rowOff: 0, // Desplazamiento vertical en celdas
        //         },
        //         to: {
        //           col: 3, // Columna de final
        //           colOff: 0, // Desplazamiento horizontal en celdas
        //           row: 5, // Fila de final
        //           rowOff: 0, // Desplazamiento vertical en celdas
        //         },
        //     },
        // });
        var titleStyle = wb.createStyle({
            alignment: {
                horizontal: ["center"],
            },
            fill: {
                type: "pattern",
            },
            font: {
                color: "000000",
                size: 15,
            },
        });

        var headerLeftWrapStyle = wb.createStyle({
            alignment: {
                wrapText: true,
                horizontal: "center",
            },
            fill: {
                type: "pattern",
                patternType: "solid",
                fgColor: "2C70BB",
            },
            font: {
                bold: true,
                color: "ffffff",
                size: 12,
            },
        });
         //TITULOS
         ws.cell(1, 1, 1, 7, true)
         .string("REPORTE MI COLACION")
         .style(titleStyle);
     ws.cell(2, 1, 2, 7, true)
         .string("RUC:1707748776001")
         .style(titleStyle);
     ws.cell(3, 1, 3, 7, true)
         .string("TELEFONOS: 0968580445")
         .style(titleStyle);
     ws.cell(4, 1, 4, 7, true)
         .string("DIRECCION: Av. Simón Bolívar Km 2 1/2")
         .style(titleStyle);
        ws.cell(5, 1, 5, 7, true)
            .string("FECHA: " + fechaFormateada(today))
            .style(titleStyle);
        // CABECERA DETALLE 
        ws.cell(7, 1).string("Nombre Estudiante").style(headerLeftWrapStyle);
        ws.cell(7, 2).string("Seccion").style(headerLeftWrapStyle);
        ws.cell(7, 3).string("Servicio").style(headerLeftWrapStyle);
        ws.cell(7, 4).string("Nombre Representante").style(headerLeftWrapStyle);
        ws.cell(7, 5).string("Email").style(headerLeftWrapStyle);
        ws.cell(7, 6).string("Direccion").style(headerLeftWrapStyle);
        ws.cell(7, 7).string("Telefono").style(headerLeftWrapStyle);

        //SHOW DATA
        for (var i = 0, l = result.length; i < l; i++) {
            ws.cell(8 + i, 1).string(
                result[i].dataValues.lastName + " " + result[i].dataValues.firstName
            );
            ws.cell(8 + i, 2).string(result[i].dataValues.cliente_seccion?.name);
            ws.cell(8 + i, 3).string(result[i].dataValues.cliente_servicio?.name);
            ws.cell(8 + i, 4).string(result[i].dataValues.cliente_representante?.names);
            ws.cell(8 + i, 5).string(result[i].dataValues.cliente_representante?.email);
            ws.cell(8 + i, 6).string(result[i].dataValues.cliente_representante?.adress);
            ws.cell(8 + i, 7).string(result[i].dataValues.cliente_representante?.telefon);
        }
        //GENERATE EXCEL
        if (result instanceof Array) {
            wb.write("ReporteEstudiantes.xlsx", res);
        } else {
            res.send({
                code: 500,
                data: result,
            });
        }
    } catch (error) {
        res.status(400).json(error.message)
    }

}

module.exports = {
    generateExcelClients,
}