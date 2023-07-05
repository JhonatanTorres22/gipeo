export class Root {
    "data": ObjetivoModelI[]
    "isSuccess": boolean
    "message": string
  }
  
export class ObjetivoModelI {
    "id":number;
    "codigoInterno":string;
    "descripcion": string;
    "indicador": string;
    "lineaBase":number;
    "estado":boolean;
    
}