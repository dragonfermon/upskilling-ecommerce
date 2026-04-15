import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { transform } from "next/dist/build/swc";
import { Product } from "../domain/Product";

interface Props {
    product: Product;
}

export function ProductCard({ product }: Props) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadious: 3,
                trasition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}>
            <CardMedia
                component="img"
                height="180"
                image={product.imageURL}
                alt={product.imageURL}
                sx={{ objectFit: 'cover' }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="subtitle1">
                    {product.price.toFixed(2)}
                </Typography>

                <Box>
                    <Typography variant="caption" sx={{
                        color: product.stock > 0 ? 'success.main' : 'error.main',
                        fontWeight: 600,
                    }}>
                        {product.stock > 0 ? 'In stock' : 'Out of stock'}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button variant="contained"
                    size="small"
                    fullWidth
                    disabled={product.stock === 0}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}