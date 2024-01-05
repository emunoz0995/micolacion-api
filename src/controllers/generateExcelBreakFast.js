const path = require('path');
const xl = require("excel4node");
const Utils = require("../utils/Utils");
const ReportService = require("../services/reports.services");

const generateExcelBreakFast = async (req, res) => {
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
        var ws = wb.addWorksheet("BreakFast");

        //RESPONSE PASSENGER FROM INGALA

        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportBreakFast(school_id);

        //COLUMNS
        ws.column(1).setWidth(40);
        ws.column(2).setWidth(15);
        ws.column(3).setWidth(35);
        ws.column(4).setWidth(15);
        ws.column(5).setWidth(15);
        ws.column(6).setWidth(15);
        ws.column(7).setWidth(20);

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
        ws.cell(7, 1).string("Nombres").style(headerLeftWrapStyle);
        ws.cell(7, 2).string("Sección").style(headerLeftWrapStyle);
        ws.cell(7, 3).string("Servicio").style(headerLeftWrapStyle);
        ws.cell(7, 4).string("Refrigerios diarios").style(headerLeftWrapStyle);
        ws.cell(7, 5).string("Refrigerios a favor ").style(headerLeftWrapStyle);
        ws.cell(7, 6).string("Extras consumidos").style(headerLeftWrapStyle);
        ws.cell(7, 7).string("Estatus pago").style(headerLeftWrapStyle);

        //SHOW DATA
        for (var i = 0, l = result.length; i < l; i++) {
            ws.cell(8 + i, 1).string(result[i].lastName + " " + result[i].firstName);
            ws.cell(8 + i, 2).string(result[i].cliente_seccion?.name);
            ws.cell(8 + i, 3).string(result[i].cliente_servicio?.name);
            ws.cell(8 + i, 4).number(result[i].breakfastConsumed);
            ws.cell(8 + i, 5).number(result[i].totalBreakfast);
            ws.cell(8 + i, 6).number(result[i].totalExtras);    
            ws.cell(8 + i, 7).string(result[i].paidService ? "Canselado" : "Pago pendiente");     
        }
        //GENERATE EXCEL
        if (result instanceof Array) {
            wb.write("BreakFastReport.xlsx", res);
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
    generateExcelBreakFast,
}