var basedatoscliente = [];
var basedatoshotel = []; 
function guardar() {
    if (basedatoscliente.length == 0) {

        function Cliente(cliente,dni,ubicacion,fecha){
            this.cliente=cliente;
            this.dni=dni;
            this.ubicacion=ubicacion;
            this.fecha=fecha;
        }
        var nuevocliente = document.getElementById("cliente").value;
        var nuevodni = document.getElementById("dni").value;
        var nuevaubicacion = document.getElementById("ubicacion").value;
        var nuevafecha = 13;
    
            console.log(nuevafecha);

        nuevoCliente = new Cliente(nuevocliente,nuevodni,nuevaubicacion,nuevafecha);
        console.log(nuevoCliente);
        basedatoscliente.push(nuevoCliente);
        document.getElementById("cliente").disabled  = "true";
        document.getElementById("dni").disabled  = "true"; 
        document.getElementById("ubicacion").disabled  = "true";
        agregartabla1();
    }

   function Hotel(tipo,cantidad,costo) {
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.costo=costo;
   }
        var nuevotipo = document.getElementById("tipo").value;
        var nuevacantidad = document.getElementById("cantper").value;
        var nuevocosto ;
    if(document.getElementById("tipo").value == "matrimonial"){
            nuevocosto = 26;
    }else if (document.getElementById("tipo").value == "personal") {
        nuevocosto = 20;
    }else if(document.getElementById("tipo").value == "familiar") {
        nuevocosto = 30;
    }else{
        alert("no se selecciono tipo...");
    }
   nuevoHotel = new Hotel(nuevotipo,nuevacantidad,nuevocosto);
   basedatoshotel.push(nuevoHotel);
   agregartabla2();

}
function reset() {
    document.getElementsByTagName('tbody')[1].innerHTML = "";
    document.getElementsByTagName('tbody')[0].innerHTML = "";    
    basedatoshotel.splice(0 ,basedatoshotel.length);
    basedatoscliente.splice(0 ,basedatoscliente.length);
    document.getElementById("cliente").disabled  = false;
    document.getElementById("dni").disabled  = false;
    document.getElementById("ubicacion").disabled  = false;
    document.getElementById("cliente").value = "";
    document.getElementById("total").value = "";
    document.getElementById("dni").value  = ""; 
    document.getElementById("ubicacion").value  = "";
    document.getElementById("cantper").value = "";

}
function agregartabla1() {
    contenido = '';
    for (let a = 0; a < basedatoscliente.length; a++) {
        const element = basedatoscliente[a];
         contenido += '<tr><td>' + (a+1) + '</td><td>' + element.cliente + '</td><td>'+ element.dni + '</td><td>' + element.fecha + '</td><td>'+ element.ubicacion + '</td></tr>';
    }
    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
}

function agregartabla2() {
    var contenido2 = '';
    var sumatotal = 0;
    for (let i = 0; i < basedatoshotel.length; i++) { 
        const element = basedatoshotel[i];
        sumatotal += (element.costo * element.cantidad);
        contenido2 += '<tr><td>' + (i+1) + '</td><td>' +  element.tipo + '</td><td>' + element.costo +'</td><td>' + element.cantidad + '</td><td><img src="../image/icons8-basura-50.png" width="30px" onclick="eliminar('+i+')"></td></tr>';
    };
    document.getElementsByTagName('tbody')[1].innerHTML = contenido2;
    document.getElementById("total").value = sumatotal;
}
function eliminar(index) {
    console.log(index);
    if (confirm("CONFIRMAR ELIMINACION DEL REGISTRO...")) {
        basedatoshotel.splice(index ,1);
        agregartabla2();
    }
}
