export interface ProductoComercial {
    nombre:                           string;
    bin:                              string;
    volumenPaquete:                   number;
    descripcion:                      string;
    // imagenAnverso:                    number[];
    // imagenReverso:                    number[];
    sku:                              string;
    stockMinimo:                      number;
    numeroMesesStockMinimo:           number;
    consumoPromedio:                  number;
    estado:                           number;

    codigoAfinidad:                   Afinidad;
    codigoMarcaProductoComercial:     Marca;
    codigoMarcaTipoProductoComercial: MarcaTipo;
    codigoTipoTarjeta:                TipoTarjeta;

    createdBy:                        string;
    precio:                           number;
}


export interface Marca {
    id: number;
    namne: string
}
export interface MarcaTipo {
    id: number;
    namne: string
}
export interface Afinidad {
    id: number;
    namne: string
}
export interface TipoTarjeta {
    id: number;
    namne: string
}