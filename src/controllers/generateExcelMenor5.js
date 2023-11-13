const path = require('path');
const xl = require("excel4node");
const Utils = require("../utils/Utils");
const ReportService = require("../services/reports.services")

const generateExcelMenor5 = async (req, res) => {
    try {
        var today = new Date();
        var wb = new xl.Workbook({
            dateFormat: "dd/mm/yyyy hh:mm:ss",
        });
        var ws = wb.addWorksheet("Menor a 5");

        const formatDateToLocal = (date) => {
            const formattedDate = new Date(date).toLocaleString();
            return formattedDate;
        }

        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportMenorFive(school_id);

        //COLUMNS

        ws.column(1).setWidth(40);
        ws.column(2).setWidth(50);
        ws.column(3).setWidth(15);
        ws.column(4).setWidth(40);
        ws.column(5).setWidth(25);
        ws.column(6).setWidth(25);
        ws.column(7).setWidth(25);

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
            .string("RUC:0491532939001")
            .style(titleStyle);
        ws.cell(3, 1, 3, 7, true)
            .string("TELEFONOS: 062245069 - 2245258")
            .style(titleStyle);
        ws.cell(4, 1, 4, 7, true)
            .string("DIRECCION: PANAMERICANA SUR Y LAS CLAUDIAS")
            .style(titleStyle);
        ws.cell(5, 1, 5, 7, true)
            .string("FECHA: " + formatDateToLocal(today))
            .style(titleStyle);
        // CABECERA DETALLE 
        ws.cell(7, 1).string("Nombre Representante").style(headerLeftWrapStyle);
        ws.cell(7, 2).string("Email").style(headerLeftWrapStyle);
        ws.cell(7, 3).string("Telefono").style(headerLeftWrapStyle);
        ws.cell(7, 4).string("Nombre Estudiante").style(headerLeftWrapStyle);
        ws.cell(7, 5).string("Servicio").style(headerLeftWrapStyle);
        ws.cell(7, 6).string("Refrigerios a favor").style(headerLeftWrapStyle);
        ws.cell(7, 7).string("Almuerzos a favor").style(headerLeftWrapStyle);
        //SHOW DATA
        for (var i = 0, l = result.length; i < l; i++) {

            ws.cell(8 + i, 1).string(result[i].cliente_representante?.names);
            ws.cell(8 + i, 2).string(result[i].cliente_representante?.email);
            ws.cell(8 + i, 3).string(result[i].cliente_representante?.telefon);
            ws.cell(8 + i, 4).string(
                result[i].lastName + " " + result[i].firstName
            );
            ws.cell(8 + i, 5).string(result[i].cliente_servicio?.name);
            ws.cell(8 + i, 6).number(result[i].totalBreakfast);
            ws.cell(8 + i, 7).number(result[i].totalLunch);
        }
        //GENERATE EXCEL
        if (result instanceof Array) {
            wb.write("ReporteMenor5.xlsx", res);
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
    generateExcelMenor5,
}