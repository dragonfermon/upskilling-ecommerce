import { Product } from "../domain/Product";
import { mapProductDTOtoDomain } from "../domain/ProductMaper";
import { 
    getAllProducts,
    getProductById as repositoryGetProductById
} from "./ProductRepository";

export async function getProducts(): Promise<Product[]> {
    const productDTOs = await getAllProducts();

    return productDTOs
    .filter(p => p.isActive)
    .map(mapProductDTOtoDomain);
}

export async function getProductById(id: string): Promise<Product| null> {
    const ProductDTO = await repositoryGetProductById(id);

    if (!ProductDTO || !ProductDTO.isActive) return null;

    return mapProductDTOtoDomain(ProductDTO);
}