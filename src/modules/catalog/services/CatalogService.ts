import { httpGet } from "@/shared/infrastructure/httpClient";
import { Product } from "../domain/Product";

export async function getProducts(): Promise<Product[]> {
    return httpGet<Product[]>('/api/products');
}