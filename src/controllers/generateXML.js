const xmlbuilder = require('xmlbuilder');

const generateXML = async (req, res , next) => {
    try {

        const formatDateToLocal = (date) => {
            const formattedDate = new Date(date);
            const dia = formattedDate.getDate().toString().padStart(2, '0');
            const mes = (formattedDate.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque los meses van de 0 a 11
            const anio = formattedDate.getFullYear();
            return `${dia}/${mes}/${anio}`;
          }

        var today = new Date();

        const opts = {
            version: "1.0",
            encoding: "UTF-8",
            standalone: "yes",
        }

        const opts2 = {
            id: "comprobante",
            version: "1.1.0",
        }

        const invoice = req.body;

        const calculateSubTotal = () => {
            return invoice.reduce((total, item) => total + item.quantity * item.price, 0);
        };
    
        const calculateIva = () => {
            const subtotal = invoice.reduce((total, item) => total + item.quantity * item.price, 0);
            return (subtotal * 0.12).toFixed(2);
        };
    
        const calculateTotal = () => {
            const subtotal = invoice.reduce((total, item) => total + item.quantity * item.price, 0);
            const iva = (subtotal * 0.12).toFixed(2);
            return (parseInt(subtotal) + parseFloat(iva)).toFixed(2);
        };

        const informacionFactura = {
            fechaEmision: formatDateToLocal(today),
            dirEstablecimientoKM: invoice[0].dir,
            obligadoContabilidad: "SI",
            tipoIdentificacionComprador: "04",
            razonSocialComprador: invoice[0].names,
            identificacionComprador: invoice[0].ci,
            totalSinImpuestos: calculateSubTotal(),
            totalDescuento: "0",
            totalConImpuestostotalImpuesto: "",
            codigo: "2",
            codigoPorcentaje: "2",
            baseImponible: calculateSubTotal(),
            valor: calculateIva(),
            totalImpuesto: "",
            propina: "0",
            importeTotal: calculateTotal(),
            moneda: "DOLAR",
            pagos: "",
            formaPago: "20",
            total: calculateTotal(),
            plazo: "0",
            unidadTiempo: "dias",
            pago: "",
        }

        const xml = xmlbuilder.create('factura', opts).att(opts2);
        const infoTributaria = xml.ele('infoTributaria');
        infoTributaria.ele('ambiente', '2');
        infoTributaria.ele('tipoEmision', '1');
        infoTributaria.ele('razonSocial', 'MARIA DOLORES VALDIVIEZO GAETE');
        infoTributaria.ele('nombreComercial', 'MARIA DOLORES VALDIVIEZO GAETE');
        infoTributaria.ele('ruc', '1707748776001');
        infoTributaria.ele('claveAcceso', '2208202301170774877600120020020000047200003795115');
        infoTributaria.ele('codDoc', '01');
        infoTributaria.ele('estab', '002');
        infoTributaria.ele('ptoEmi', '002');
        infoTributaria.ele('secuencial', '000004720');
        infoTributaria.ele('dirMatriz', 'KM 2 1 2 AV  SIMON BOLIVAR S N FRENTE A LA CASA DE LA SELE');
        infoTributaria.ele('agenteRetencion', '1');
        infoTributaria.ele('contribuyenteRimpe', 'CONTRIBUYENTE RÉGIMEN RIMPE');

        const infoFactura = xml.ele('infoFactura');
        infoFactura.ele(informacionFactura);

        const detalles = xml.ele('detalles');
        invoice.forEach((item) => {
            const detalle = detalles.ele('detalle')
            detalle.ele('codigoPrincipal', item.id);
            detalle.ele('codigoAuxiliar', item.code);
            detalle.ele('descripcion', item.description);
            detalle.ele('cantidad', item.quantity);
            detalle.ele('precioUnitario', item.price);
            detalle.ele('descuento', item.percent);
            detalle.ele('precioTotalSinImpuesto', item.price);
            detalle.ele('impuestos', '');
            detalle.ele('codigo', '2');
            detalle.ele('codigoPorcentaje', '2');
            detalle.ele('tarifa', '12.00');
            detalle.ele('baseImponible', item.price);
            detalle.ele('valor', ((item.quantity * item.price)*0.12).toFixed(2));
        });

        const infoAdicional = xml.ele('infoAdicional');
        const campoAdicional = infoAdicional.ele('campoAdicional')
        campoAdicional.ele('campoAdicional','Agente de Retencion Resolucion Nro  NAC-DNCRASC20-00000001').att("nombre","Tipo");
        campoAdicional.ele('campoAdicional','CONTRIBUYENTE RÉGIMEN RIMPE').att("nombre","RIMPE");
        campoAdicional.ele('campoAdicional', invoice[0].dir).att("nombre","Direccion");
        campoAdicional.ele('campoAdicional', invoice[0].telefon).att("nombre","Telefono");
        campoAdicional.ele('campoAdicional', invoice[0].email).att("nombre","Email");
        campoAdicional.ele('campoAdicional', 'VENTAS ENE. FEB. MAR. ABR. MAY. JUNIO').att("nombre","Observacion");

        const xmlString = xml.end({ pretty: true });

        res.setHeader('Content-Disposition', 'attachment; filename=Factura00002020.xml');
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        res.send(xmlString);
        next();
    } catch (error) {
        res.status(400).json(error.message)
    }

}


module.exports = {
    generateXML,
}