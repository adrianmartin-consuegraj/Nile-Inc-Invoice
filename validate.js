
function validarDNI(dni) {
	var numero
	var letr
	var letra
	var expresion_regular_dni
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/

	if (expresion_regular_dni.test(dni) == true) {
		numero = dni.substr(0, dni.length - 1)
		letr = dni.substr(dni.length - 1, 1)
		numero = numero % 23
		letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
		letra = letra.substring(numero, numero + 1)
		if (letra != letr.toUpperCase()) {
			return false
		} else {
			return true
		}
	} else {
		return false
	}
}

function validarNIE(value) {
	var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
	var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
	var str = value.toString().toUpperCase();

	if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

	var nie = str
		.replace(/^[X]/, '0')
		.replace(/^[Y]/, '1')
		.replace(/^[Z]/, '2');

	var letter = str.substr(-1);
	var charIndex = parseInt(nie.substr(0, 8)) % 23;

	if (validChars.charAt(charIndex) === letter) return true;

	return false;
}


function validarCP(elemento) {

	if (elemento.value != "" && elemento.value.length == 5 && validarNumber(elemento.value, 0, 5) && elemento.value >= 01000 && elemento.value <= 52999) {

		return true;
	} else {
		return false;
	}
}


function provinciaEtCA(elemento) {

	var cp = elemento.value.substring(0, 2);
	if (cp < 10) {
		cp = cp.substring(1, 2);
	}

	let provincias = ["Ninguno", "Álava", "Albacete", "Alicante", "Almería",
		"Ávila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos",
		"Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba",
		"La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara",
		"Guipúzcoa", "Huelva", "Huesca", "Jaén", "León",
		"Lérida", "La Rioja", "Lugo", "Madrid", "Málaga",
		"Murcia", "Navarra", "Orense", "Asturias", "Palencia",
		"Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria",
		"Segovia", "Sevilla", "Soria", "Tarragona", "Teruel",
		"Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza",
		"Ceuta", "Melilla"];

	document.getElementById("provincia").value = provincias[cp]

	if (document.getElementById("provincia").value == "Almería" ||
		document.getElementById("provincia").value == "Cádiz" ||
		document.getElementById("provincia").value == "Córdoba" ||
		document.getElementById("provincia").value == "Granada" ||
		document.getElementById("provincia").value == "Huelva" ||
		document.getElementById("provincia").value == "Jaén" ||
		document.getElementById("provincia").value == "Málaga" ||
		document.getElementById("provincia").value == "Sevilla") {
		document.getElementById("comunidadAutonoma").value = "Andalucía";
	}

	if (document.getElementById("provincia").value == "Huesca" ||
		document.getElementById("provincia").value == "Teruel" ||
		document.getElementById("provincia").value == "Zaragoza") {
		document.getElementById("comunidadAutonoma").value = "Aragón";
	}

	if (document.getElementById("provincia").value == "Asturias") {
		document.getElementById("comunidadAutonoma").value = "Asturias";
	}

	if (document.getElementById("provincia").value == "Islas Baleares") {
		document.getElementById("comunidadAutonoma").value = "Islas Baleares";
	}

	if (document.getElementById("provincia").value == "Santa Cruz de Tenerife" ||
		document.getElementById("provincia").value == "Las Palmas") {
		document.getElementById("comunidadAutonoma").value = "Islas Canarias";
	}

	if (document.getElementById("provincia").value == "Cantabria") {
		document.getElementById("comunidadAutonoma").value = "Cantabria";
	}

	if (document.getElementById("provincia").value == "Toledo" ||
		document.getElementById("provincia").value == "Ciudad Real" ||
		document.getElementById("provincia").value == "Cuenca" ||
		document.getElementById("provincia").value == "Guadalajara" ||
		document.getElementById("provincia").value == "Albacete") {
		document.getElementById("comunidadAutonoma").value = "Castilla-La Mancha";
	}

	if (document.getElementById("provincia").value == "León" ||
		document.getElementById("provincia").value == "Palencia Real" ||
		document.getElementById("provincia").value == "Salamanca" ||
		document.getElementById("provincia").value == "Burgos" ||
		document.getElementById("provincia").value == "Zamora" ||
		document.getElementById("provincia").value == "Valladolid" ||
		document.getElementById("provincia").value == "Soria" ||
		document.getElementById("provincia").value == "Segovia" ||
		document.getElementById("provincia").value == "Ávila") {
		document.getElementById("comunidadAutonoma").value = "Castilla Y León";
	}

	if (document.getElementById("provincia").value == "Barcelona" ||
		document.getElementById("provincia").value == "Tarragona" ||
		document.getElementById("provincia").value == "Lérida" ||
		document.getElementById("provincia").value == "Gerona") {
		document.getElementById("comunidadAutonoma").value = "Cataluña";
	}

	if (document.getElementById("provincia").value == "Cáceres" ||
		document.getElementById("provincia").value == "Badajoz") {
		document.getElementById("comunidadAutonoma").value = "Extremadura";
	}

	if (document.getElementById("provincia").value == "La Coruña" ||
		document.getElementById("provincia").value == "Lugo" ||
		document.getElementById("provincia").value == "Orense" ||
		document.getElementById("provincia").value == "Pontevedra") {
		document.getElementById("comunidadAutonoma").value = "Galicia";
	}

	if (document.getElementById("provincia").value == "La Rioja") {
		document.getElementById("comunidadAutonoma").value = "La Rioja";
	}


	if (document.getElementById("provincia").value == "Madrid") {
		document.getElementById("comunidadAutonoma").value = "Comunidad de Madrid";
	}


	if (document.getElementById("provincia").value == "Navarra") {
		document.getElementById("comunidadAutonoma").value = "Navarra";
	}


	if (document.getElementById("provincia").value == "Álava" ||
		document.getElementById("provincia").value == "Vizcaya" ||
		document.getElementById("provincia").value == "Guipúzcoa") {
		document.getElementById("comunidadAutonoma").value = "País Vasco";
	}


	if (document.getElementById("provincia").value == "Murcia") {
		document.getElementById("comunidadAutonoma").value = "Región de Murcia";
	}


	if (document.getElementById("provincia").value == "Castellón" ||
		document.getElementById("provincia").value == "Valencia" ||
		document.getElementById("provincia").value == "Alivcante") {
		document.getElementById("comunidadAutonoma").value = "Comunidad Valenciana";
	}


}

//Validar Email
function validarEmail(elemento) {
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(elemento)) {
		return true
	} else {
		return false
	}
}

//formato de móvil: primer digito 6 ó 7
function validarMovil(cadena) {

	if (cadena.length != 9) {
		return false;
	} if (cadena.substring(0, 1) == 6 || cadena.substring(0, 1) == 7) {
		return true;
	}
}

//formato de telefono: primer digito 6 ó 7
function validarTelefono(cadena) {

	if (cadena.length != 9) {
		return false;
	} if (cadena.substring(0, 1) == 9) {
		return true;
	}
}

//validar Captcha
function validarCaptchaForm(elemento) {
	var valor1 = document.getElementById("valor1Captcha").innerHTML;
	var valor2 = document.getElementById("valor2Captcha").innerHTML;
	var suma = Number(valor1) + Number(valor2);

	if (elemento.value != suma) {
		return false;
	}
	else {
		return true;
	}
}



//Validar FORMULARIO
function validarForm() {
	var res = true;
	var mensaje = "";

	var numeroFactura = document.getElementById("numeroFactura").value;
	var fecha = document.getElementById("fecha").value;
	var nombreCliente = document.getElementById("nombreCliente").value;
	var direccion = document.getElementById("direccion").value;
	var codigoPostal = document.getElementById("codigoPostal");
	var ciudad = document.getElementById("ciudad").value;
	var cifNif = document.getElementById("cifNif").value;
	var telefonoContacto = document.getElementById("telefonoContacto").value;
	var email = document.getElementById("email").value;
	var resultadoCaptcha = document.getElementById("resultadoCaptcha");


	if (!validarNumber(numeroFactura, 1, 60)) {
		res = false;
		mensaje += "· Se debe insertar un Número de Factura.\n";
	}

	if (!esFecha(fecha)) {
		res = false;
		mensaje += "· Se debe introducir una fecha.\n";
	}

	if (!validarString(nombreCliente, 1, 60)) {
		res = false;
		mensaje += "· Se debe introducir un Nombre de Cliente.\n";
	}

	if (!validarString(direccion,1,60)) {
		res = false;
		mensaje += "· Se debe introducir una dirección.\n";
	}

	if (!validarCP(codigoPostal)) {
		res = false;
		mensaje += "· Se debe introducir un Código Postal.\n";
	}

	if (!validarString(ciudad, 1, 60)) {
		res = false;
		mensaje += "· Se debe introducir una ciudad.\n";
	}

	if (!validarDNI(cifNif)) {
		res = false;
		mensaje += "· Se debe introducir un CIF/NIF.\n";
	}

	if (!validarMovil(telefonoContacto)) {
		res = false;
		mensaje += "· Se debe introducir un teléfono de contacto.\n";
	}

	if (!validarEmail(email)) {
		res = false;
		mensaje += "· Se debe introducir un email.\n";
	}

	if (!validarCaptchaForm(resultadoCaptcha)) {
		res = false;
		mensaje += "· Se debe resolver el captcha.\n";
	}


	if (res == false) {
		alert(mensaje);
	} else{
		recuperarDatos();
	}

	//return res;

}






//RECUPERAR DATOS
function recuperarDatos() {

	var numeroFactura = document.getElementById("numeroFactura").value;
	var fecha = document.getElementById("fecha").value;
	var nombreCliente = document.getElementById("nombreCliente").value;
	var direccion = document.getElementById("direccion").value;
	var codigoPostal = document.getElementById("codigoPostal").value;
	var provincia = document.getElementById("provincia").value;
	var ciudad = document.getElementById("ciudad").value;
	var cifNif = document.getElementById("cifNif").value;
	var telefonoContacto = document.getElementById("telefonoContacto").value;
	var email = document.getElementById("email").value;	

	var mensaje = "";

	//Se devuelven solo los datos introducidos
	if (numeroFactura != "") {
		mensaje += "Núm. Factura: " + numeroFactura + ".\n";
	}

	if (fecha != "") {
		mensaje += "Fecha: " + fecha + ".\n";
	}

	if (nombreCliente != "") {
		mensaje += "Nombre Cliente: " + nombreCliente + ".\n";
	}

	if (direccion != "") {
		mensaje += "Dirección: " + direccion + ".\n";
	}

	if (codigoPostal != "") {
		mensaje += "Código Postal: " + codigoPostal + ".\n";
	}

	if (provincia != "") {
		mensaje += "Provincia: " + provincia + ".\n";
	}

	if (ciudad != "") {
		mensaje += "Ciudad: " + ciudad + ".\n";
	}

	if (cifNif != "") {
		mensaje += "CIF/NIF: " + cifNif + ".\n";
	}

	if (telefonoContacto != "") {
		mensaje += "Teléfono: " + telefonoContacto + ".\n";
	}

	if (email != "") {
		mensaje += "Email: " + email + ".\n";
	}

	alert(mensaje);
}








// ============== TALLER ==============


//NÚMERO FACTURA
function validarNumber(cadena, min, max) {
	var res = false;

	if (min == 0 && max != null) {
		if ((!isNaN(cadena) && cadena.length <= max) || cadena == "")
			res = true;
	}

	if (min > 0 && max == null) {
		if (!isNaN(cadena) && cadena.length >= min)
			res = true;
	}

	if (min == 0 && max == null) {
		if (!isNaN(cadena) || cadena == "")
			res = true;
	}

	if (min > 0 && max != null) {
		if (!isNaN(cadena) && cadena.length >= min && cadena.length <= max)
			res = true;
	}

	return res;
}

//FECHA
function esFecha(fecha) {

	var array = fecha.split("/");
	dia = parseInt(array[0]);
	mes = parseInt(array[1]);
	anio = parseInt(array[2]);
	var correcta = false;
	var Hoy = new Date();

	if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
		if (dia <= 31 && dia > 0) {
			correcta = true;
		}
	}
	else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
		if (dia <= 30 && dia > 0) {
			correcta = true;
		}
	}
	else if (mes == 2 && anio % 4 == 0 && dia <= 29 && dia > 0) {
		correcta = true;
	}
	else if (mes == 2 && anio % 4 != 0 && dia <= 28 && dia > 0) {
		correcta = true;
	}
	else {
		correcta = false;
	}

	// var AnyoHoy = Hoy.getFullYear();
	// var MesHoy = Hoy.getMonth();
	// var DiaHoy = Hoy.getDate();


	// if (anio > AnyoHoy) {
	// 	correcta = false;
	// }

	// if (mes == MesHoy && anio == AnyoHoy && dia == DiaHoy + 1) {
	// 	correcta = false;
	// }

	if (dia.length < 2 || mes.length < 2 || anio.length < 4) {
		correcta = false;
	}

	return correcta;
}

//NOMBRE CLIENTE Y DIRECCIÓN
function validarString(cadena, min, max) {
	var res = false;

	if (min == 0 && max != null) {
		if ((isNaN(cadena) && cadena.length <= max) || cadena == "")
			res = true;
	}

	if (min > 0 && max == null) {
		if (isNaN(cadena) && cadena.length >= min)
			res = true;
	}

	if (min == 0 && max == null) {
		if (isNaN(cadena) || cadena == "")
			res = true;
	}

	if (min > 0 && max != null) {
		if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
			res = true;
	}

	return res;
}

//CÓDIGO POSTAL - PROVINCIA
function provincia(elemento) {

	var cp = elemento.value.substring(0, 2);
	if (cp < 10) {
		cp = cp.substring(1, 2);
	}

	let provincias = ["Ninguno", "Álava", "Albacete", "Alicante", "Almería",
		"Ávila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos",
		"Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba",
		"La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara",
		"Guipúzcoa", "Huelva", "Huesca", "Jaén", "León",
		"Lérida", "La Rioja", "Lugo", "Madrid", "Málaga",
		"Murcia", "Navarra", "Orense", "Asturias", "Palencia",
		"Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria",
		"Segovia", "Sevilla", "Soria", "Tarragona", "Teruel",
		"Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza",
		"Ceuta", "Melilla"];

	document.getElementById("provincia").value = provincias[cp]

	if (document.getElementById("provincia").value == "Almería" ||
		document.getElementById("provincia").value == "Cádiz" ||
		document.getElementById("provincia").value == "Córdoba" ||
		document.getElementById("provincia").value == "Granada" ||
		document.getElementById("provincia").value == "Huelva" ||
		document.getElementById("provincia").value == "Jaén" ||
		document.getElementById("provincia").value == "Málaga" ||
		document.getElementById("provincia").value == "Sevilla") {
	}

	if (document.getElementById("provincia").value == "Huesca" ||
		document.getElementById("provincia").value == "Teruel" ||
		document.getElementById("provincia").value == "Zaragoza") {
	}

	if (document.getElementById("provincia").value == "Asturias") {
	}

	if (document.getElementById("provincia").value == "Islas Baleares") {
	}

	if (document.getElementById("provincia").value == "Santa Cruz de Tenerife" ||
		document.getElementById("provincia").value == "Las Palmas") {
	}

	if (document.getElementById("provincia").value == "Cantabria") {
	}

	if (document.getElementById("provincia").value == "Toledo" ||
		document.getElementById("provincia").value == "Ciudad Real" ||
		document.getElementById("provincia").value == "Cuenca" ||
		document.getElementById("provincia").value == "Guadalajara" ||
		document.getElementById("provincia").value == "Albacete") {
	}

	if (document.getElementById("provincia").value == "León" ||
		document.getElementById("provincia").value == "Palencia Real" ||
		document.getElementById("provincia").value == "Salamanca" ||
		document.getElementById("provincia").value == "Burgos" ||
		document.getElementById("provincia").value == "Zamora" ||
		document.getElementById("provincia").value == "Valladolid" ||
		document.getElementById("provincia").value == "Soria" ||
		document.getElementById("provincia").value == "Segovia" ||
		document.getElementById("provincia").value == "Ávila") {
	}

	if (document.getElementById("provincia").value == "Barcelona" ||
		document.getElementById("provincia").value == "Tarragona" ||
		document.getElementById("provincia").value == "Lérida" ||
		document.getElementById("provincia").value == "Gerona") {
	}

	if (document.getElementById("provincia").value == "Cáceres" ||
		document.getElementById("provincia").value == "Badajoz") {
	}

	if (document.getElementById("provincia").value == "La Coruña" ||
		document.getElementById("provincia").value == "Lugo" ||
		document.getElementById("provincia").value == "Orense" ||
		document.getElementById("provincia").value == "Pontevedra") {
	}

	if (document.getElementById("provincia").value == "La Rioja") {
	}

	if (document.getElementById("provincia").value == "Madrid") {
	}

	if (document.getElementById("provincia").value == "Navarra") {
	}

	if (document.getElementById("provincia").value == "Álava" ||
		document.getElementById("provincia").value == "Vizcaya" ||
		document.getElementById("provincia").value == "Guipúzcoa") {
	}

	if (document.getElementById("provincia").value == "Murcia") {
	}

	if (document.getElementById("provincia").value == "Castellón" ||
		document.getElementById("provincia").value == "Valencia" ||
		document.getElementById("provincia").value == "Alivcante") {
	}
}

function validarDNI(dni) {
	var numero
	var letr
	var letra
	var expresion_regular_dni
	expresion_regular_dni = /^\d{8}[a-zA-Z]$/

	if (expresion_regular_dni.test(dni) == true) {
		numero = dni.substr(0, dni.length - 1)
		letr = dni.substr(dni.length - 1, 1)
		numero = numero % 23
		letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
		letra = letra.substring(numero, numero + 1)
		if (letra != letr.toUpperCase()) {
			return false
		} else {
			return true
		}
	} else {
		return false
	}
}



//INSERTAR LINEAS EN TABLA

var num = 0; //para dar id

function insertarLinea() {
    num = num + 1;
    
                var tabla=document.getElementById("tabla");
                var row = tabla.insertRow(1);
                var cell1 = row.insertCell(0);
                var td1 = row.insertCell(0);
                var td2 = row.insertCell(1);
                var td3 = row.insertCell(2);
                var td4 = row.insertCell(3);
                var td5 = row.insertCell(4);
                var td6= row.insertCell(5);
                var td7 = row.insertCell(6);
                var td8 = row.insertCell(7);
    td1.innerHTML = "<input type='number' class='form-control'  id='inputCantidad" + num + "' name='descripcion' onkeyup='fila(); sumaIVAS();maximos(this) ' ></input>";
    td2.innerHTML = "<input type='text' class='form-control'  id='inputDescripcion" + num + "' name='descripcion' ></input>";
    td3.innerHTML = "<input type='number' class='form-control'  id='inputPrecio" + num + "' name='descripcion' onkeyup='fila() ;sumaIVAS()' ></input>";

    td4.innerHTML = "<select class='form-control' id='porcentajeIVA" + num + "' name='porcentajeIVA' onchange='fila();sumaIVAS()'> <option value='4'>4%</option><option value='10'>10%</option><option value='21' selected>21%</option></select>";
    td5.innerHTML = "<input type='number'  id='inputIVA" + num + "' class='form-control' disabled> ";
    td6.innerHTML = "<input type='number' id='inputImporte" + num + "'class='form-control' disabled> ";
    td7.innerHTML = "<input type='number' id='inputTotal" + num + "' class='form-control' disabled> ";
    td8.innerHTML = "<button id='borrar" + num + "' class='btn btn-dark'  onclick='borraLinea(this);sumaIVAS()' > eliminar</button>";
               

}

//Funcionpara  escoger solo el numero de un texto
function dimeNumeroInput(elemento) {
   
    // Prueba coger numeros: var txt = "#div-name-1234-characteristic:561613213213";
    var numID = elemento.id.match(/\d/g);
    numID = numID.join("");
    return numID;
}

//Prueba suma  de productos por los distintos ivas
function sumaIVAS() {

    var tabla = document.getElementById("tabla");
    var baseIVA21 = document.getElementById("baseIVA21").value=0;
    var baseIVA10 = document.getElementById("baseIVA10").value=0;
    var baseIVA4  = document.getElementById("baseIVA4").value=0;
    var IVA21 = document.getElementById("IVA21").value=0;
    var IVA10 = document.getElementById("IVA10").value=0;
    var IVA4 = document.getElementById("IVA4").value=0;

    var totalFactura=0;
//     alert(tabla.rows.length);
    for (var i = 1; i < tabla.rows.length ; i++) {
        //21
        if(document.getElementById("tabla").rows[i].cells[3].getElementsByTagName('select')[0].value==21){

            var t = Number(document.getElementById("tabla").rows[i].cells[5].getElementsByTagName('input')[0].value);
            baseIVA21=Number(document.getElementById("baseIVA21").value);
            baseIVA21=baseIVA21+t;
            document.getElementById("baseIVA21").value=baseIVA21;

            var g = Number(document.getElementById("tabla").rows[i].cells[4].getElementsByTagName('input')[0].value);
            
            IVA21=Number(document.getElementById("IVA21").value);
            IVA21=IVA21+g;
            document.getElementById("IVA21").value=IVA21;

        }

        if(document.getElementById("tabla").rows[i].cells[3].getElementsByTagName('select')[0].value==10){

            var t = Number(document.getElementById("tabla").rows[i].cells[5].getElementsByTagName('input')[0].value);
            baseIVA10=Number(document.getElementById("baseIVA10").value);
            baseIVA10=baseIVA10+t;
            document.getElementById("baseIVA10").value=baseIVA10;

            var g = Number(document.getElementById("tabla").rows[i].cells[4].getElementsByTagName('input')[0].value);
          
            IVA10=Number(document.getElementById("IVA10").value);
            IVA10=IVA10+g;
            document.getElementById("IVA10").value=IVA10;

			
        }

        if(document.getElementById("tabla").rows[i].cells[3].getElementsByTagName('select')[0].value==4){

            var t = Number(document.getElementById("tabla").rows[i].cells[5].getElementsByTagName('input')[0].value);
            baseIVA4=Number(document.getElementById("baseIVA4").value);
            baseIVA4=baseIVA4+t;
            document.getElementById("baseIVA4").value=baseIVA4;

            var g = Number(document.getElementById("tabla").rows[i].cells[4].getElementsByTagName('input')[0].value);
            
            IVA4=Number(document.getElementById("IVA4").value);
            IVA4=IVA4+g;
            document.getElementById("IVA4").value=IVA4;

			
        }

		totalFactura=baseIVA21+ baseIVA10+baseIVA4 + IVA21+ IVA10+IVA4;
		document.getElementById("totalFactura").value=totalFactura.toFixed(2);

    }

     
}

//calculamos la suma de todos los productos para generar la factura
function fila() {


    for (i = 1; i <= num; i++) {
        if (lista.length == 0) {
            var inputPrecio = "inputPrecio" + i;
            var precio = document.getElementById(inputPrecio).value;


            var inputCantidad = "inputCantidad" + i;
            var cantidad = document.getElementById(inputCantidad).value;

            var inputImporte = "inputImporte" + i;
            var importe = document.getElementById(inputImporte).value = precio * cantidad;
            var inputPorcentajeIVA = "porcentajeIVA" + i;
            var porcentajeIVA = document.getElementById(inputPorcentajeIVA).value;
            var inputIVA = "inputIVA" + i;
            var IVA = precio * cantidad * (porcentajeIVA / 100);
            document.getElementById(inputIVA).value = IVA;

            var inputTotal = "inputTotal" + i;
            var importeTotal=importe+IVA
            document.getElementById(inputTotal).value=importeTotal;
        } else {

            if (lista.includes(i.toString())) {


                continue;
            }
            else {
                var inputPrecio = "inputPrecio" + i;
                var precio = document.getElementById(inputPrecio).value;


                var inputCantidad = "inputCantidad" + i;
                var cantidad = document.getElementById(inputCantidad).value;

                var inputImporte = "inputImporte" + i;
                var importe = document.getElementById(inputImporte).value = precio * cantidad;
                var inputPorcentajeIVA = "porcentajeIVA" + i;
                var porcentajeIVA = document.getElementById(inputPorcentajeIVA).value;
                var inputIVA = "inputIVA" + i;
                var IVA = precio * cantidad * (porcentajeIVA / 100);
                document.getElementById(inputIVA).value = IVA;

                var inputTotal = "inputTotal" + i;
                var importeTotal=importe+IVA
                document.getElementById(inputTotal).value=importeTotal;
            }
        }
    }



}

function maximos(elemento) {
    //tiene que ir con onkeyup
    if (elemento.value.length > 3) elemento.value = elemento.value.slice(0, 3);
}

//creamos una lista para guardar los numeros de los id que borramos
var lista = [];
function listaBorrado(numero) {

    lista.push(numero)
}

function borraLinea(t) {

    var td = t.parentNode;
    var tr = td.parentNode;
    var table = tr.parentNode;


    //cojo  el numero del input para guardarlo en la lista
    var numero = dimeNumeroInput(t)
    listaBorrado(numero)

    table.removeChild(tr);

}


//Validar FORMULARIO
function validarFormFactura() {
	var res = true;
	var mensaje = "";

	var totalFactura = document.getElementById("totalFactura").value;

	if (totalFactura == "" || totalFactura == null || totalFactura == 0) {
		res = false;
		mensaje += "· Se debe introducir al menos un producto.\n";
	}

	if (res == false) {
		alert(mensaje);
	}else{
		recuperarDatosFactura();
	}

	//return res;

}


//RECUPERAR DATOS FORMULARIO FACTURA
function recuperarDatosFactura() {

	//RECUPERAR datos insertados

	var totalFactura = document.getElementById("totalFactura").value;

	//INSERTAR datos recuperados (Se devuelven solo los datos introducidos)
	var mensaje = "";

	if (totalFactura != "") {
		mensaje += "Total Factura: " + totalFactura + "€.\n";
	}

	alert(mensaje);
}



