import { Product } from "../domain/Product";
import { mapProductDTOtoDomain } from "../domain/ProductMaper";
import { getAllProducts } from "./ProductRepository";

export async function getProducts(): Promise<Product[]> {
    const productDTOs = await getAllProducts();

    return productDTOs
    .filter(p => p.isActive)
    .map(mapProductDTOtoDomain);
}