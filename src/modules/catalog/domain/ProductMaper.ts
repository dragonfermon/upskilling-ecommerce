import { Product } from "./Product";
import { ProductDTO } from "./ProductDTO";

export function mapProductDTOtoDomain(dto: ProductDTO): Product {
    return {
        id: dto.id,
        name: dto.name,
        description: dto.description,
        price: dto.price,
        stock: dto.stock,
        imageURL: dto.imageURL,
        isActive: dto.isActive
    }
}