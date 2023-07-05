export interface detalleObjetivoI {
    data: DaumDetalleObjetivo[]
    isSuccess: boolean
    message: string
  }
  
  export interface DaumDetalleObjetivo {
    id: number;
    codigoInterno: string;
    descripcion: string;
    indicador: string;
    lineaBase: number;
    metaOE: MetaOe;
  }
  
  export interface MetaOe {
    anio: number;
    valor: number;
  }

  