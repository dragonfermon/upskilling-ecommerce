import { ProductDTO } from "../domain/ProductDTO";

const mockProducts: ProductDTO[] = [
    {
        id: "p001",
        name: "Smartwatch X200",
        description: "Reloj inteligente con monitor de ritmo cardíaco",
        price: 199.99,
        stock: 25,
        imageURL: "https://picsum.photos/id/310/400/300",
        isActive: true,
    },
    {
        id: "p002",
        name: "Auriculares Bluetooth",
        description: "Auriculares inalámbricos con cancelación de ruido",
        price: 89.99,
        stock: 50,
        imageURL: "https://picsum.photos/id/311/400/300",
        isActive: true,
    },
    {
        id: "p003",
        name: "Laptop Pro 15",
        description: "Portátil de alto rendimiento con pantalla 15 pulgadas",
        price: 1299.99,
        stock: 10,
        imageURL: "https://picsum.photos/id/312/400/300",
        isActive: true,
    }       
];

export async function getAllProducts(): Promise<ProductDTO[]>{
    return mockProducts;
}