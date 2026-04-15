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
    isActive: false,
  },
  {
    id: "p003",
    name: "Laptop Pro 15",
    description: "Portátil de alto rendimiento con pantalla 15 pulgadas",
    price: 1299.99,
    stock: 10,
    imageURL: "https://picsum.photos/id/312/400/300",
    isActive: true,
  },
  {
    id: "p004",
    name: "Cámara Digital 4K",
    description: "Cámara profesional con grabación en 4K y zoom óptico",
    price: 599.99,
    stock: 0,
    imageURL: "https://picsum.photos/id/313/400/300",
    isActive: true,
  },
  {
    id: "p005",
    name: "Tablet Android 10\"",
    description: "Tableta Android con pantalla de 10 pulgadas y 64GB",
    price: 249.99,
    stock: 30,
    imageURL: "https://picsum.photos/id/314/400/300",
    isActive: true,
  },
  {
    id: "p006",
    name: "Teclado Mecánico RGB",
    description: "Teclado gamer mecánico con retroiluminación RGB",
    price: 129.99,
    stock: 40,
    imageURL: "https://picsum.photos/id/315/400/300",
    isActive: true,
  },
  {
    id: "p007",
    name: "Mouse Gamer Inalámbrico",
    description: "Ratón gamer inalámbrico con luces RGB y alta precisión",
    price: 79.99,
    stock: 60,
    imageURL: "https://picsum.photos/id/316/400/300",
    isActive: true,
  },
  {
    id: "p008",
    name: "Altavoz Portátil Waterproof",
    description: "Altavoz Bluetooth portátil resistente al agua",
    price: 99.99,
    stock: 35,
    imageURL: "https://picsum.photos/id/317/400/300",
    isActive: true,
  },
  {
    id: "p009",
    name: "Monitor 27\" 4K",
    description: "Monitor UHD 4K de 27 pulgadas para trabajo y gaming",
    price: 399.99,
    stock: 20,
    imageURL: "https://picsum.photos/id/318/400/300",
    isActive: true,
  },
  {
    id: "p010",
    name: "Impresora Multifuncional WiFi",
    description: "Impresora con escáner y conexión inalámbrica",
    price: 149.99,
    stock: 25,
    imageURL: "https://picsum.photos/id/319/400/300",
    isActive: true,
  }
];

export async function getAllProducts(): Promise<ProductDTO[]> {
    return mockProducts;
}

export async function getProductById(id: string): Promise<ProductDTO | null> {
    const found = mockProducts.find(p => p.id === id);

    return found ?? null;

}