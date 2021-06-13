let Rutas=new Ruta();
 
let btnAgregar=document.getElementById('btnAdd');
btnAgregar.addEventListener('click',()=>{
    let nombre, minutos;
    nombre=document.getElementById('txtnombre').value;
    minutos=document.getElementById('txtminutos').value;
    let nuevo=new Base(nombre,minutos);
    Rutas.agregar(nuevo);
    document.getElementById("txtnombre").value="";
    document.getElementById("txtminutos").value="";
})
 
let btnListar=document.getElementById('btnList');
btnListar.addEventListener('click',()=>{
    document.getElementById("lista").value="";
    let res=Rutas.listar();
    document.getElementById("lista").innerHTML=res;
})

let btnBuscar=document.getElementById('btnSearch');
btnBuscar.addEventListener('click',()=>{
    let nombre=document.getElementById('txtbuscar').value;
    let resultado=Rutas.buscar(nombre);
    let datos=document.getElementById('buscado');
    if (resultado==null){
        datos.innerHTML += `<br>
            <h3>No se encontro</h3>`;  
    }
    else{
        datos.innerHTML += '<h3>Se encontro<h3>';
        datos.innerHTML += resultado.infoHtml();
    }
})

let btnEliminar=document.getElementById('btnDelete');
btnEliminar.addEventListener('click',()=>{
    let nombre=document.getElementById('txtbuscar').value;
    let resultado=Rutas.eliminar(nombre);
    let datos=document.getElementById('buscado');
    if (resultado==null){
        datos.innerHTML += `<br>
            <h3>No hay</h3>`;  
    }
    else{
        datos.innerHTML += '<h3>Eliminado<h3>';
    }
})

let btnRecorrido=document.getElementById('btnrecorrido');
btnRecorrido.addEventListener('click',()=>{
    let res= null;
    let baseini=document.getElementById("txtbase").value;
    res=Rutas.buscar(baseini);
    if (res==null)
        document.getElementById("datos").innerHTML="No se encontró nada";
    else{
        horainicio=document.getElementById("txthrinicial").value;
        horafin=document.getElementById("txthrfinal").value;
        ruta=Rutas.crearRecorrido(res,horainicio,horafin)
        document.getElementById("datos").innerHTML= ruta;
    }
})