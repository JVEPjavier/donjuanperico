export interface Producto {
    id:             number;
    nombreProducto: string;
    precio:         number;
    descripcion:    string;
    imagen:         string;
    proveedor:      Proveedor;
    categoria:      Categoria;
}

export interface Categoria {
    id:              number;
    nombreCategoria: string;
}

export interface Proveedor {
    id:                number;
    nombreProveedor:   string;
    correoElectronico: string;
    numeroTelefono:    string;
}
