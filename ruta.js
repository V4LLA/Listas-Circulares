class Ruta{
    constructor(){
        this.inicio= null; 
    }

    agregar(nuevo){
        if(this.inicio== null){
            this.inicio= nuevo; 
            nuevo.siguiente= this.inicio;
            nuevo.anterior= this.inicio;
            }
            else{
              let ultimo= this.inicio.anterior;
              ultimo.siguiente= nuevo;
              nuevo.siguiente= this.inicio;
              nuevo.anterior= ultimo;
              this.inicio.anterior= nuevo;
          }
        }
    listar(){
      if (this.inicio==null){
        return false; 
      }
      else{
        let res='';
        let t= this.inicio;
        if (this.inicio!= null){
            res= t.infoTabla();

            while(t.siguiente!= this.inicio){
            t= t.siguiente;
            res += t.infoTabla();
            }
        }
        return res;
      }
    }

    buscar(nombre){
      let t= this.inicio;
      do{
        if(t.nombre== nombre){
          return t;
          }
          t= t.siguiente;
        }while (t!= this.inicio)
          return null;
    }
    eliminar(nombre){
        if(this.inicio!=null)
        {
            if(this.inicio.nombre==nombre)
            {
                let t=this.inicio.anterior;
                t.siguiente.siguiente.anterior=t;
                t.siguiente=t.siguiente.siguiente;
                this.inicio=t.siguiente;
                return true;
            }
            else
            {
                let t=this.inicio;
                while(t.siguiente!=this.inicio)
                {
                    if(t.siguiente.nombre==nombre)
                    {
                        t.siguiente.siguiente.anterior=t;
                        t.siguiente=t.siguiente.siguiente;
                        return true;
                    }
                    else
                    {
                        t=t.siguiente;
                    }
                }
            }
            return false;
        }
      }

      crearRecorrido(baseinicio,horainicio,horafin)
      { 
        if(this.inicio!=null)
        {
          let t= this.inicio;
          while(t!=baseinicio)
          {
            t= t.siguiente;
          }
          if(t==baseinicio)
          {
            let tiempo=0;
            tiempo= horainicio;
            let bases="";
            while(t.siguiente!=null && tiempo!=horafin)
            {
            bases+= t.info();
            tiempo+= t.minutos;
            t= t.siguiente;
            }
            return bases;
        }
        }
        return false;
      }
    }