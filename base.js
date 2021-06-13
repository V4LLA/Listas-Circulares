class Base{
    constructor(nombre, minutos){
        this.nombre= nombre;
        this.minutos= minutos;
        this.siguiente= null;
        this.anterior= null;
    }
    info(){  
        return this.nombre +  "(" + this.minutos + ")";
    }

    infoHtml(){
        return `<div>
                    <p>Nombre:${this.nombre}</p>
                    <p>Minutos:${this.minutos}</p>
                </div>`;
    }

    infoTabla(){
        return `<table>
        <td> <strong>Nombre</strong> <br> ${this.nombre}</td>
        <td> <strong>Minutos</strong> <br> ${this.minutos}</td>
        </table>`;
    }
}