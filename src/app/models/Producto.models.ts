export interface Producto {
    id:             number;
    nombreProducto: string;
    precio:         number;
    descripcion:    string;
    imagen:         string;
    cantidad: number;
    
    proveedor:      Proveedor;
    categoria:      Categoria;

}

export interface ProductItemCart {
    product: Producto;
    quantity: number;
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
