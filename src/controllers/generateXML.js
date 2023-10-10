const xmlbuilder = require('xmlbuilder');

const generateXML = async (req, res) => {
    try {
        const opts = {
            version:"1.0", 
            encoding:"UTF-8", 
            standalone:"yes",
           }

        const informacionFactura ={
        fechaEmision:"22/08/2023",
		dirEstablecimientoKM: "2 1 2 AV  SIMON BOLIVAR S N FRENTE A LA CASA DE LA SELE",
		obligadoContabilidad:"SI",
		tipoIdentificacionComprador:"04",
		razonSocialComprador:"MUNOZ ALTAMIRANO MARIA SOL",
		identificacionComprador:"1706602792001",
		totalSinImpuestos:"735.00",
		totalDescuento:"0",
		totalConImpuestostotalImpuesto:"",
		codigo:"2",
		codigoPorcentaje:"2",
		baseImponible:"735.00",
		valor:"88.20",
	    totalImpuesto:"",
		propina:"0",
		importeTotal:"823.20",
		moneda:"DOLAR",
		pagos:"",
		formaPago:"20",
		total:"823.20",
		plazo:"0",
		unidadTiempo:"dias",
		pago:"",
        }

        const xml = xmlbuilder.create('factura',opts);

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

        const infoFactura = xml.ele('infoTributaria');
        infoFactura.ele(informacionFactura);

        const detalles = xml.ele('detalles');
            const detalle = detalles.ele('detalle')
                detalle.ele('codigoPrincipal', '119');
                detalle.ele('codigoAuxiliar', 'MC-0020');
                detalle.ele('descripcion', 'TARJETA ALMUERZOS SECUNDARIA  ENERO A JUNIO 2022-2023  Cajas Munoz Francisco Jose');
                detalle.ele('cantidad', '1.00');
                detalle.ele('precioUnitario', '367.50');
                detalle.ele('descuento', '0');
                detalle.ele('precioTotalSinImpuesto', '367.50');
                detalle.ele('impuestos', '');
                   
        const xmlString = xml.end({ pretty: true });

        res.setHeader('Content-Type','application/xml; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename=Factura00002020.xml');
        res.send(xmlString);

        console.log(xmlString)

    } catch (error) {
        res.status(400).json(error.message)
    }

}


module.exports = {
    generateXML,
}