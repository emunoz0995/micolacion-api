const path = require('path');
const xl = require("excel4node");
const Utils = require("../utils/Utils");
const FacturationService = require('../services/facturation.services');

const generateExcelServicesForCobrar = async (req, res) => {
    try {
        var today = new Date();
        var wb = new xl.Workbook({
            dateFormat: "dd/mm/yyyy hh:mm:ss",
        });
        var ws = wb.addWorksheet("ServiciosPorCobrar");

        const formatDateToLocal = (date) => {
            const formattedDate = new Date(date).toLocaleString();
            return formattedDate;
        }

        //RESPONSE PASSENGER FROM INGALA

        const school_id = Utils.decode(req.params.school_id);
        const result = await FacturationService.getServicesReceivable(school_id);

        //COLUMNS
        ws.column(1).setWidth(18);
        ws.column(2).setWidth(35);
        ws.column(3).setWidth(30);
        ws.column(4).setWidth(40);
        ws.column(5).setWidth(35);
        ws.column(6).setWidth(30);
        ws.column(7).setWidth(15);
        ws.column(8).setWidth(10);
        ws.column(9).setWidth(10);

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
            .string("FECHA: " + formatDateToLocal(today))
            .style(titleStyle);
        // CABECERA DETALLE 
        ws.cell(7, 1).string("Fecha y Hora ").style(headerLeftWrapStyle);
        ws.cell(7, 2).string("Estudiante").style(headerLeftWrapStyle);
        ws.cell(7, 3).string("Servicio Principal").style(headerLeftWrapStyle);
        ws.cell(7, 4).string("Servicio Tomado").style(headerLeftWrapStyle);
        ws.cell(7, 5).string("Representante").style(headerLeftWrapStyle);
        ws.cell(7, 6).string("Email").style(headerLeftWrapStyle);
        ws.cell(7, 7).string("Telefono").style(headerLeftWrapStyle);
        ws.cell(7, 8).string("Valor ").style(headerLeftWrapStyle);
        ws.cell(7, 9).string("Consumidos").style(headerLeftWrapStyle);

        //SHOW DATA
        for (var i = 0, l = result.length; i < l; i++) {
            ws.cell(8 + i, 1).string(formatDateToLocal(result[i].createdAt));
            ws.cell(8 + i, 2).string(result[i].lastName + " " + result[i].firstName);
            ws.cell(8 + i, 3).string(result[i].history_servicioPrincipal?.name);
            ws.cell(8 + i, 4).string(result[i].history_servicio?.name);
            ws.cell(8 + i, 5).string(result[i].history_representante?.names);
            ws.cell(8 + i, 6).string(result[i].history_representante?.email);
            ws.cell(8 + i, 7).string(result[i].history_representante?.telefon);
            ws.cell(8 + i, 8).string(result[i].history_servicio?.price);
            ws.cell(8 + i, 9).string("1");           
        }
        //GENERATE EXCEL
        if (result instanceof Array) {
            wb.write("ServiciosPorCobrar.xlsx", res);
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
    generateExcelServicesForCobrar,
}