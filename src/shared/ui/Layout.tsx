'use client';

import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Upskillig Ecommerce
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: 4}}>
                {children}
            </Container>
        </>
    )
}