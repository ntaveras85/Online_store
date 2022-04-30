//para gestionar el modelo del detalle
export interface Details {
    productId: number,
    productName:string,
    quantity:number
}

//para gestionar el modelo de las ordenes
export interface Order {
    name: string,
    fecha: string,
    shippingAddress: string,
    city: string,
    isDelivery: boolean,
    id: number
}

//para gestionar el modelo DetailsOrder 
export interface DetailsOrder {
    details: Details[],
    orderId: number
} 
