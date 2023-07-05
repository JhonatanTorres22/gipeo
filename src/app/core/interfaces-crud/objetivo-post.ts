export class Root {
    "data": ObjetivoPostI[]
    "isSuccess": boolean
    "message": string
  }
  
export class ObjetivoPostI {
    "id":number;
    "codigoInterno":string;
    "descripcion": string;
    "indicador": string;
    "lineaBase":number;
    "usuarioModificacion":number;
    "estado":boolean;
}

export class ObjetivoUpdateI
{
    "id":number;
    "codigoInterno":string;
    "descripcion": string;
    "indicador": string;
    "lineaBase":number;
    "usuarioModificacion":number;
}
export class ObjetivoDeleteI
{
    "id":number;
    "usuarioModificacion":1;
}