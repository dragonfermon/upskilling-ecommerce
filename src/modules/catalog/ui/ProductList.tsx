'use client';

import { useEffect, useState } from "react";
import { Product } from "../domain/Product";
import { getProducts } from "../services/CatalogService";
import { Alert, CircularProgress, Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  const [products, setProducts]    = useState<Product[]>([]);
  const [loading, setLoading]    = useState(true);
  const [error, setError]    = useState<string | null>(null);

  useEffect(() => {
    getProducts()
    .then(setProducts)
    .catch(() => setError('Error loading products'))
    .finally(() => setLoading(false))
  }, []);

  if (loading) return <CircularProgress/>;
  if (error) return <Alert severity="error"></Alert>

    return (
    <Grid container spacing={2}>
        { products.map(product => (
            <Grid key={product.id} size={{ xs: 12, md:4}}>
                <ProductCard product={product} />
            </Grid>
        ))}
    </Grid>
  )
}